const CACHE='minha-frequencia-v6';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./tracks.json','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('minha-frequencia-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 const isProgram=url.pathname.endsWith('/tracks.json');
 const isAudio=url.pathname.includes('/audio/');
 if(isProgram||isAudio){
  event.respondWith((async()=>{
   const key=new Request(url.origin+url.pathname);
   try{
    const response=await fetch(event.request,{cache:'no-store'});
    if(response.ok){const cache=await caches.open(CACHE);await cache.put(key,response.clone())}
    return response;
   }catch(error){const saved=await caches.match(key);if(saved)return saved;throw error}
  })());
  return;
 }
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
  if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}
  return response;
 }).catch(()=>caches.match('./index.html'))));
});
