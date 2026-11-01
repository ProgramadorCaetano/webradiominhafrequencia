# Minha Frequência — PWA

Primeira versão estática e instalável da rádio sob demanda sobre TEA, TDAH, TOD e neurodiversidade.

## Rodar localmente

Abra um terminal nesta pasta e execute um servidor HTTP, por exemplo:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`. Para instalação e funcionamento PWA, use HTTPS ou localhost.

## O que já funciona
- Player de áudio com play/pause, posição, volume, avanço/volta de programas, fila e modo aleatório.
- Abas de programação atual e programas passados.
- Layout responsivo, ícone fornecido, manifesto PWA e cache offline.
- Três pequenos áudios sintetizados incluídos para demonstrar o fluxo de reprodução.

## Próximas personalizações
Use o Painel Administrativo separado para editar `tracks.json` e os arquivos em `audio/`. A programação agora é carregada de `tracks.json`, não é mais editada dentro de `app.js`. Conteúdo editorial/educativo é demonstrativo; a versão inicial não faz transmissão ao vivo nem possui painel administrativo.
