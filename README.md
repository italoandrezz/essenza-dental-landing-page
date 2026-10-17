# Essenza Dental

Landing page da clínica Essenza, desenvolvida com React, TypeScript e Vite a partir do vídeo de referência.

## Estado atual

O projeto inclui a paleta oficial, um cabeçalho fixo durante a rolagem, menu recolhível em celulares e tablets, seção inicial com foto, cartões sobrepostos e indicadores. A apresentação da clínica contém um mosaico de fotos e um cartão sobre sua filosofia de cuidado. A seção de tratamentos reúne Ortodontia, Clareamento, Implantes, Estética dental, Clínica geral e Prevenção.

Os botões de agendamento e contato abrem o WhatsApp informado pelo responsável. Cada cartão de tratamento abre uma mensagem específica sobre a especialidade escolhida. O menu inclui os links para a clínica e os tratamentos.

O menu fecha ao selecionar uma seção, clicar fora, pressionar Escape ou ampliar a tela para desktop. O layout respeita a preferência por movimento reduzido e oferece navegação por teclado e acesso direto ao conteúdo.

A seção “O extraordinário mora nos detalhes” apresenta os quatro diferenciais da Essenza: atendimento personalizado, tecnologia moderna, conforto em cada visita e cuidado humanizado. O menu leva à seção, e o botão “Viva essa experiência” abre o WhatsApp.

A seção “Cuidado que deixa marcas bonitas” apresenta um carrossel manual com três depoimentos fictícios, conforme solicitado para esta fase. Inclui botões anterior/próximo, seleção direta, navegação por setas do teclado e anúncio das alterações para leitores de tela, sem avanço automático. O link “Experiências” leva à seção.

A seção “Informação também é uma forma de cuidado” reúne seis perguntas frequentes em um acordeão: a primeira resposta começa aberta, somente uma pode ficar aberta por vez e todas podem ser recolhidas. O link “Dúvidas” no menu leva à seção, e o contato complementar abre o WhatsApp.

As próximas etapas incluem as fotos e identidade definitivas, seção de contato e rodapé. Os itens correspondentes serão adicionados ao menu conforme essas seções forem implementadas. A fonte e o símbolo da marca são provisórios até a confirmação dos arquivos originais.

## Contato e conteúdo provisório

- O WhatsApp é configurado em `src/config/contato.ts`: `+55 (81) 98567-6610`.
- A foto é ilustrativa e não representa as instalações da Essenza. Foi obtida por meio desta [imagem do Unsplash](https://images.unsplash.com/photo-1629909613654-28e377c37b09) e está armazenada localmente em `public/imagens/clinica-provisoria.jpg`. Substitua-a pela fotografia oficial antes da publicação definitiva.
- Os indicadores `12+`, `3 mil` e `4,9` reproduzem o vídeo de referência. Confirme os dados antes da publicação definitiva.
- Os nomes e relatos em `src/dados/experiencias.ts` são fictícios, identificados na interface como conteúdo de apresentação. Substitua-os por depoimentos reais e autorizados antes da publicação definitiva. As estrelas também são demonstrativas.
- As perguntas e respostas ficam em `src/dados/perguntasFrequentes.ts`. O conteúdo é provisório e deve ser confirmado pela clínica antes da publicação, especialmente informações sobre convênios, pagamentos e disponibilidade de atendimento. Nenhuma lista de convênios ou condição de pagamento foi presumida.
- As imagens adicionais também são provisórias: [ambiente odontológico](https://images.unsplash.com/photo-1629909615184-74f495363b67), [atendimento](https://images.unsplash.com/photo-1606811841689-23dfddce3e95) e [prevenção](https://images.unsplash.com/photo-1606811971618-4486d14f3f99). Estão armazenadas em `public/imagens/` e não representam a equipe ou os espaços reais da Essenza.

## Responsividade

- Celular: conteúdo em uma coluna, foto abaixo do texto e botões maiores nas telas mais estreitas.
- Tablet: menu recolhível e seção inicial em duas colunas a partir de 768 px.
- Desktop: navegação expandida a partir de 1024 px e foto ao lado do texto.
- O mosaico da clínica usa três colunas no desktop e se reorganiza em duas no tablet; no celular, a foto principal e o texto ocupam a largura disponível.
- A grade de tratamentos usa uma coluna abaixo de 600 px, duas entre 600 e 1023 px e três a partir de 1024 px.
- Os diferenciais usam introdução e lista lado a lado a partir de 768 px; no celular, o conteúdo fica em uma coluna e o botão ocupa a largura disponível nas telas menores.
- O carrossel de experiências adapta os textos e espaçamentos ao celular e ao tablet, com botões de pelo menos 44 px. O menu permite rolagem em telas baixas, inclusive em paisagem.
- As perguntas frequentes apresentam introdução e respostas lado a lado a partir de 768 px e uma coluna no celular. Os botões aceitam Enter e Espaço; as setas para cima/baixo, Home e End movem o foco entre as perguntas, mantendo Tab disponível para a navegação normal.

Valide também o fechamento do menu por teclado, as âncoras, o carregamento da foto e a ausência de rolagem horizontal. Os links externos informam a abertura de outra aba às tecnologias assistivas.

Nesta etapa, essas verificações passaram em navegador Chromium nas larguras de 320, 390, 600, 768, 820, 1024 e 1440 px, sem erros de execução. Também foram conferidos o fechamento ao clicar fora ou redimensionar a tela e o respeito ao movimento reduzido. Os testes não enviam mensagens ao WhatsApp.

As novas seções foram verificadas nas mesmas sete larguras: carregamento das fotos, quantidade de colunas, âncora de tratamentos, fechamento do menu e conteúdo das seis mensagens do WhatsApp, sem rolagem horizontal ou erros de execução.

A seção de diferenciais também foi validada nessas sete larguras: quatro itens presentes, uma ou duas colunas conforme a tela, navegação pela âncora, fechamento do menu, foco por teclado e endereço do WhatsApp, sem rolagem horizontal ou erros de execução.

O carrossel de experiências foi validado nas mesmas larguras e em paisagem (844 × 390 px): botões, ciclo entre os três relatos, seleção direta, setas do teclado, foco, estado do indicador, conteúdo demonstrativo, âncora e fechamento do menu. Não houve rolagem horizontal nem erros de execução.

O acordeão de perguntas frequentes também foi validado nessas sete larguras e em paisagem: estado inicial, abertura única, recolhimento de todas as respostas, Enter, Espaço, setas, Home, End, associação entre controles e respostas, link de contato e acesso pelo menu. Não houve rolagem horizontal nem erros de execução.

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
git switch -c feat/nome-da-etapa
```

Depois de implementar e validar:

```bash
npm run lint
npm run build
git add .
git commit -m "Adiciona os componentes da seção de tratamentos"
git push -u origin feat/nome-da-etapa
```

Abra o pull request da branch da etapa com destino à `develop`. Após revisão e validação, integre preservando os commits separados por mudança. As duas branches permanentes são `main` e `develop`; as branches de etapa são temporárias. Não abra pull requests para a `main` durante o desenvolvimento.

Somente quando o projeto estiver completo e validado, abra o pull request final de `develop` para `main`. Preencha o template, aguarde a verificação automática e integre criando um commit de merge, preservando os commits individuais. Escreva também a mensagem do merge em português. Preserve a branch `develop` e crie a tag `v1.0.0` e a release com notas em português após a integração final.

Quando houver uma integração autorizada à `main`, sincronize a `develop` sem reescrever o histórico:

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
- `src/components/Clinica.tsx`: apresentação e mosaico de fotos da clínica.
- `src/components/Tratamentos.tsx`: grade de tratamentos com links para o WhatsApp.
- `src/components/Diferenciais.tsx`: apresentação dos diferenciais da clínica.
- `src/components/Experiencias.tsx`: carrossel acessível da seção de experiências.
- `src/components/PerguntasFrequentes.tsx`: acordeão acessível das perguntas frequentes.
- `src/dados/perguntasFrequentes.ts`: perguntas e respostas editáveis.
- `src/dados/experiencias.ts`: depoimentos fictícios para apresentação do layout.
- `src/dados/tratamentos.ts`: nomes, descrições e imagens dos tratamentos.
- `src/config/contato.ts`: número e endereço de agendamento pelo WhatsApp.
- `src/index.css`: paleta, estilos globais e elementos compartilhados.
- `src/App.css`: estilos das seções e adaptação a telas menores.
- `public/`: arquivos estáticos.
- `.github/`: verificação automática e template de pull request.

