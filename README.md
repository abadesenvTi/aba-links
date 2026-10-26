# ABA Links

Página estática com atalhos para os principais portais e serviços da ABA English Education.

## Portais disponíveis

- Portal Professor
- Registro de Ponto
- Macmillan
- Spark
- ABA.net
- ABA Tellme
- Gmail

O projeto foi desenvolvido para oferecer acesso rápido aos serviços utilizados pela equipe, com uma interface responsiva para computadores, tablets e celulares.

## Executar localmente

Abra `index.html` no navegador ou sirva o diretório com qualquer servidor HTTP estático.

Exemplo com Node.js:

```bash
npx serve .
```

## Manutenção

- Os endereços e rótulos dos portais ficam em `index.html`.
- A aparência e as cores ficam em `style.css`.
- As imagens ficam no diretório `IMG`.
- Links externos devem manter `target="_blank"` e `rel="noopener noreferrer"`.

O projeto não depende do Tailwind ou de um processo de build para funcionar. A única dependência externa carregada pela página é a fonte Inter do Google Fonts; caso ela não esteja disponível, o CSS usa fontes locais do sistema.

## Estrutura do projeto

```text
aba-links/
├── IMG/         # Logos e imagens da interface
├── index.html   # Conteúdo e endereços dos portais
├── style.css    # Layout, responsividade e cores
├── script.js    # Atualização automática do ano no rodapé
└── CNAME        # Domínio personalizado do GitHub Pages
```

## Publicação

O site é publicado pelo GitHub Pages no domínio configurado em `CNAME`:

[aba-routing.estudenaaba.com](https://aba-routing.estudenaaba.com)

Depois de revisar as alterações, crie um commit na branch `main` e envie-o para o repositório remoto. O GitHub Pages atualizará o site conforme a configuração do repositório.

## Acessibilidade e segurança

- As logos decorativas não repetem os nomes dos links para leitores de tela.
- Todos os botões possuem indicação visual de foco para navegação por teclado.
- Animações são desativadas quando o dispositivo solicita movimento reduzido.
- Links externos abrem em uma nova aba com proteção contra acesso à página de origem.
