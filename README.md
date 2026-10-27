# ABA Links — Portal de Acessos

Portal institucional da **ABA English Education** para acesso rápido às plataformas utilizadas pela equipe.

A versão atual apresenta o redesign visual completo do portal, com painel curvo, botões em gradiente, fotografias institucionais, elementos geométricos da marca e responsividade para smartphones, tablets, notebooks e monitores de alta resolução.

## Tecnologias

- HTML5 semântico.
- CSS moderno com Grid, Flexbox, `clamp()`, unidades fluidas, `dvh` e safe areas.
- JavaScript puro para atualização automática do ano.
- SVGs inline para os ícones.
- Fonte Inter, com fallback para fontes do sistema.
- Sem framework, processo de build ou dependências instaláveis.

## Acessos preservados

| Plataforma | Destino |
| --- | --- |
| Portal Professor | https://portalaluno.abaweb.org/FrameHTML/Web/App/Edu/PortaldoProfessor/#/login |
| Registro de Ponto | https://portalrh.abaweb.org/FrameHTML/Web/App/RH/PortalMeuRH/#/login |
| Macmillan | https://mee.macmillaneducation.com/?lang=en |
| Spark | https://learn.eltngl.com/ |
| ABA.net | https://abanet.abaweb.org |
| ABA Tellme | https://www.agendatellme.com.br/aba/Authentication/Login?returnUrl=%2Faba |
| Gmail | https://mail.google.com/ |

Todos os acessos abrem em uma nova aba com `target="_blank"` e `rel="noopener noreferrer"`. Toda a superfície de cada botão é clicável.

## Identidade visual

A interface atual inclui:

- Fundo institucional cinza-claro.
- Grande painel cinza com curvatura orgânica.
- Sete botões com gradientes próprios.
- Ícones vetoriais alinhados aos nomes das plataformas.
- Símbolo quadrado amarelo no acesso Spark.
- Logomarca oficial ABA English Education.
- Fotografias reais das unidades ABA.
- Elementos decorativos azuis e vermelhos criados com CSS.
- Rodapé com ano atualizado dinamicamente.

Os recursos oficiais utilizados estão em `img/`:

- `TOTVS.svg`
- `MACMILLAN.svg`
- `ABANET.svg`
- `ABATELLME.svg`
- `GMAIL.svg`
- `logo aba.png`
- `predios.png`
- `Icone barra superior ( Favicon ).png`

## Responsividade

Os breakpoints foram definidos pelo comportamento real do layout, e não por modelos específicos de aparelhos.

### Smartphones pequenos — até 360 px

- Margens e espaçamentos compactos.
- Botões com área de toque confortável.
- Tipografia e ícones dimensionados para telas estreitas.
- Ausência de rolagem horizontal.

### Smartphones — até 390 px

- Logomarca centralizada no topo.
- Sete acessos em coluna.
- Fotografias abaixo dos botões.
- Rodapé ao final da página.

### Smartphones, tablets estreitos e tablets em portrait

O layout vertical é ativado quando:

- A largura é de até 899 px; ou
- A largura é de até 1100 px em orientação vertical.

A ordem visual é:

1. Logomarca.
2. Botões de acesso.
3. Fotografias institucionais.
4. Rodapé.

### Tablets em landscape e notebooks compactos

- A estrutura de duas colunas é preservada quando existe largura suficiente.
- Botões, logomarca e fotografias diminuem conforme a altura disponível.
- Telas com até 780 px de altura recebem ajustes adicionais.
- Rolagem vertical natural é permitida quando necessária.

### QHD, ultrawide e 4K

- Botões e fotografias crescem com limites controlados.
- A composição permanece centralizada nas duas regiões.
- As fotografias mantêm sua proporção original.
- Não é utilizado `zoom` nem `transform: scale()` na página.

## Resoluções validadas

A versão atual foi testada nas seguintes viewports:

- 320 × 568
- 375 × 667
- 390 × 844
- 430 × 932
- 844 × 390
- 768 × 1024
- 1024 × 768
- 1024 × 1366
- 1280 × 720
- 1366 × 768
- 1440 × 900
- 1536 × 864
- 1920 × 1080
- 2560 × 1440
- 3440 × 1440
- 3840 × 2160

Também foi executado um teste contínuo entre 320 e 1920 px de largura.

Foram verificados:

- Ausência de rolagem horizontal.
- Presença e acessibilidade dos sete botões.
- Áreas de toque com pelo menos 44 px.
- Proporção correta das fotografias.
- Carregamento da logomarca e imagens.
- Posicionamento dos elementos decorativos.
- Navegação por teclado e foco visível.
- Preservação dos links e abertura em nova aba.
- Ausência de erros no console.

## Estrutura do projeto

```text
ABA Links/
├── img/
│   ├── ABANET.svg
│   ├── ABATELLME.svg
│   ├── GMAIL.svg
│   ├── Icone barra superior ( Favicon ).png
│   ├── logo aba.png
│   ├── MACMILLAN.svg
│   ├── predios.png
│   └── TOTVS.svg
├── Esborço site/
│   └── esboco-site-completo.png
├── CNAME
├── index.html
├── redesign.css
├── script.js
├── style.css
└── README.md
```

### Arquivos principais

- `index.html`: estrutura, conteúdo, ícones e URLs dos serviços.
- `redesign.css`: todos os estilos ativos, layout e responsividade.
- `script.js`: atualização automática do ano no rodapé.
- `style.css`: arquivo legado sem regras ativas.
- `CNAME`: domínio personalizado da publicação.
- `Esborço site/`: referência visual do redesign.

## Executar localmente

O portal pode ser aberto diretamente pelo arquivo `index.html`, mas um servidor HTTP local é recomendado.

Com Python:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Depois, acesse:

```text
http://127.0.0.1:4173/
```

Também é possível utilizar qualquer servidor HTTP estático equivalente.

## Manutenção

### Alterar links ou nomes

Edite os elementos `<a>` dentro de `index.html`. Preserve:

```html
target="_blank" rel="noopener noreferrer"
```

### Alterar aparência ou responsividade

Edite apenas `redesign.css`. As cores institucionais estão centralizadas nas variáveis de `:root`.

### Atualizar imagens

Substitua os arquivos em `img/` preservando:

- Nome do arquivo.
- Proporção.
- Transparência, quando aplicável.
- Identidade visual oficial.

## Acessibilidade

- Estrutura semântica com `main`, `section`, `nav` e `footer`.
- Nome acessível para a navegação.
- Texto alternativo nas imagens institucionais.
- Foco de teclado visível.
- Áreas clicáveis adequadas para toque.
- Decorações com `aria-hidden="true"` e `pointer-events: none`.
- Animações reduzidas com `prefers-reduced-motion`.

## Publicação

O domínio configurado em `CNAME` é:

[aba-routing.estudenaaba.com](https://aba-routing.estudenaaba.com)

Após revisar as alterações, publique os arquivos estáticos pelo fluxo configurado do GitHub Pages.

## Limitações de validação

Os testes responsivos foram realizados por emulação de viewport em navegador Chromium. Não foram executados testes em dispositivos físicos ou no Safari/iOS real.
