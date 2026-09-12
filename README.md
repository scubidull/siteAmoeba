# sawadika — site pra sua amiga 🎀

Layout simples e literal, igual à referência: fundo vermelho liso,
uma imagem grande no topo, duas fotos clicáveis embaixo e um vinil
(PNG de verdade, gerado à mão) girando de verdade.

## arquivos

```
index.html      → página principal (foto grande + 2 fotos + vinil)
sobre-1.html    → página com texto + decoração (abre ao clicar na 1ª foto)
sobre-2.html    → página com texto + decoração (abre ao clicar na 2ª foto)
style.css       → todo o visual
script.js       → vinil girando e modal do vídeo
assets/
  hero.jpg      → foto grande do topo (troque pela foto da sua amiga)
  foto-1.jpg    → foto do card 1, linka pra sobre-1.html
  foto-2.jpg    → foto do card 2, linka pra sobre-2.html
  vinyl.png     → o disco de vinil (já pronto, pode trocar por outro PNG)
  video.mp4     → ainda não existe — adicione o vídeo que quiser aqui
```

Por enquanto as 3 fotos são só um placeholder (a imagem de referência
que você me mandou) — troque cada arquivo em `assets/` por uma foto de
verdade da sua amiga, mantendo o mesmo nome, e tudo continua funcionando.

## o que já está pronto

- **Totalmente responsivo**: os 3 cards viram uma coluna só no celular.
- **Vinil girando de verdade** (CSS puro) — começa parado, e quando você
  aperta **PRESS PLAY** ele gira e o braço do toca-discos se move.
- **Modal de vídeo**: ao clicar em PRESS PLAY, abre um player com o
  vídeo que você colocar em `assets/video.mp4`. Fecha clicando no X,
  clicando fora, ou apertando Esc.
- **Os dois cards de foto** levam para `sobre-1.html` e `sobre-2.html`,
  cada um com uma caixa de texto pra você editar à vontade.
- Título com um glitch bem sutil (efeito de VHS), grão de filme por
  cima de tudo, e uma nav que fica sólida ao rolar a página.

## como editar o texto

Abra `sobre-1.html` e `sobre-2.html` em qualquer editor de texto — os
parágrafos dentro de `<div class="story__box">` são exatamente o que
aparece na tela. Pode apagar, reescrever, adicionar mais `<p>` ou
`<li>` à vontade.

## como colocar o vídeo

1. Escolha um vídeo em formato **.mp4** (o formato que roda em
   qualquer navegador/celular sem configuração extra).
2. Renomeie o arquivo para `video.mp4` e coloque dentro da pasta
   `assets/`.
3. Pronto — o botão PRESS PLAY já aponta pra ele.

Se preferir manter o nome original do arquivo, é só abrir `index.html`
e trocar `assets/video.mp4` (aparece 1x) pelo nome/caminho certo.

### ideias do que colocar no vídeo do vinil

- Uma **mensagem gravada por você** falando direto pra ela (tipo um
  recado de aniversário/carta em vídeo).
- Um **compilado de fotos e vídeos** de vocês duas, com uma música que
  marca a amizade tocando por baixo.
- Um **lyric video caseiro**: a letra de uma música da Lisa (ou a
  "Sawadika") aparecendo na tela enquanto passam fotos dela.
- Um **"documentário" engraçado**: vídeos antigos dela dublados ou
  legendados por você, tipo fofoca boa.
- Uma **dança/dublagem** de vocês recriando uma coreografia da Lisa.
- Se não tiver vídeo pronto: grave só 15-30s falando "clica aqui" com
  uma trilha por cima — o efeito de abrir o modal já cria a surpresa.

## como colocar no ar (GitHub Pages)

1. Crie um repositório novo no GitHub (pode ser público ou privado com
   GitHub Pro — Pages funciona nos dois se a conta permitir).
2. Suba estes arquivos pra raiz do repositório (`index.html` direto na
   raiz, não dentro de uma subpasta).
3. Vá em **Settings → Pages**.
4. Em "Build and deployment", escolha **Deploy from a branch**, branch
   `main`, pasta `/ (root)`, e salve.
5. Espere ~1 minuto — o link vai aparecer ali mesmo, algo como
   `https://seu-usuario.github.io/nome-do-repositorio/`.

Qualquer atualização (trocar foto, texto, vídeo) é só subir os
arquivos de novo pro repositório — o site atualiza sozinho.
