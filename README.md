# Essenza Dental

Landing page da clínica Essenza, desenvolvida com React, TypeScript e Vite a partir do vídeo de referência.

## Estado atual

O projeto inclui a paleta oficial, um cabeçalho fixo durante a rolagem, menu recolhível em celulares e tablets, seção inicial com foto, cartões sobrepostos, indicadores e apresentação da clínica. Os botões de agendamento e contato abrem o WhatsApp informado pelo responsável.

O menu fecha ao selecionar uma seção, clicar fora, pressionar Escape ou ampliar a tela para desktop. O layout respeita a preferência por movimento reduzido e oferece navegação por teclado e acesso direto ao conteúdo.

As próximas etapas incluem as fotos e identidade definitivas, tratamentos, diferenciais, depoimentos, perguntas frequentes, seção de contato e rodapé. Os itens correspondentes serão adicionados ao menu conforme essas seções forem implementadas. A fonte e o símbolo da marca são provisórios até a confirmação dos arquivos originais.

## Contato e conteúdo provisório

- O WhatsApp é configurado em `src/config/contato.ts`: `+55 (81) 98567-6610`.
- A foto é ilustrativa e não representa as instalações da Essenza. Foi obtida por meio desta [imagem do Unsplash](https://images.unsplash.com/photo-1629909613654-28e377c37b09) e está armazenada localmente em `public/imagens/clinica-provisoria.jpg`. Substitua-a pela fotografia oficial antes da publicação definitiva.
- Os indicadores `12+`, `3 mil` e `4,9` reproduzem o vídeo de referência e estão identificados na interface como ilustrativos. Confirme os dados antes de utilizá-los como informações reais da clínica.

## Responsividade

- Celular: conteúdo em uma coluna, foto abaixo do texto e botões maiores nas telas mais estreitas.
- Tablet: menu recolhível e seção inicial em duas colunas a partir de 768 px.
- Desktop: navegação expandida a partir de 1024 px e foto ao lado do texto.

Valide também o fechamento do menu por teclado, as âncoras, o carregamento da foto e a ausência de rolagem horizontal. Os links externos informam a abertura de outra aba às tecnologias assistivas.

Nesta etapa, essas verificações passaram em navegador Chromium nas larguras de 320, 390, 600, 768, 820, 1024 e 1440 px, sem erros de execução. Também foram conferidos o fechamento ao clicar fora ou redimensionar a tela e o respeito ao movimento reduzido. Os testes não enviam mensagens ao WhatsApp.

## Desenvolvimento local

Requisito: Node.js 24 e npm.

```bash
npm ci
npm run dev
```

Abra o endereço exibido no terminal. Para validar e visualizar a compilação:

```bash
npm run lint
npm run build
npm run preview
```

## Branches e pull requests

O projeto mantém duas branches permanentes:

- `main`: versão principal; recebe alterações por pull request.
- `develop`: desenvolvimento e integração das próximas etapas.

Para iniciar uma etapa:

```bash
git switch develop
git pull --ff-only origin develop
```

Depois de implementar e validar:

```bash
npm run lint
npm run build
git add .
git commit -m "Adiciona os componentes da seção de tratamentos"
git push origin develop
```

Abra um pull request de `develop` para `main`, preencha o template e aguarde a verificação automática. Integre criando um commit de merge, preservando os commits individuais da etapa. Escreva também a mensagem do merge em português. Preserve a branch `develop` após o merge.

Antes de iniciar a próxima etapa, sincronize as duas branches sem reescrever o histórico:

```bash
git fetch origin
git switch develop
git merge origin/main -m "Sincroniza o desenvolvimento com a versão principal"
git push origin develop
```

O GitHub Actions verifica código e compilação nos pushes e pull requests destinados às duas branches. A `main` exige pull request, verificação automática aprovada e conversas resolvidas, inclusive para administradores. Não é exigida aprovação de outra pessoa, permitindo o trabalho individual.

README, documentação, mensagens de commit, títulos e descrições de pull requests devem ser escritos em português. Separe os commits por alteração, por exemplo: componentes, seção inicial, responsividade e documentação. Preserve os nomes técnicos exigidos pelas ferramentas.

## Paleta oficial

| Cor | Código | Uso |
| --- | --- | --- |
| Verde gelo | `#EFF9F7` | Fundo principal e seções suaves |
| Branco | `#FFFFFF` | Cartões e áreas de destaque |
| Verde principal | `#3D9B8D` | Destaques e elementos da marca |
| Verde escuro | `#173F38` | Títulos, textos e botões com texto branco |
| Cinza suave | `#F1F2F2` | Superfícies secundárias e divisórias |

## Estrutura

- `src/App.tsx`: composição inicial da página.
- `src/components/`: cabeçalho, seção inicial e ícones compartilhados.
- `src/config/contato.ts`: número e endereço de agendamento pelo WhatsApp.
- `src/index.css`: paleta, estilos globais e elementos compartilhados.
- `src/App.css`: estilos das seções e adaptação a telas menores.
- `public/`: arquivos estáticos.
- `.github/`: verificação automática e template de pull request.

