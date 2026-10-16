# Essenza Dental

Landing page da clínica Essenza, desenvolvida com React, TypeScript e Vite a partir do vídeo de referência.

## Estado atual

A primeira etapa inclui a paleta oficial, estilos globais, botões, cabeçalho simplificado e os textos de abertura e apresentação da clínica. O layout se adapta a telas menores e respeita a preferência por movimento reduzido.

As próximas etapas incluem as fotos e identidade definitivas, navegação completa, tratamentos, diferenciais, depoimentos, perguntas frequentes, contato e rodapé. A fonte atual é provisória até a confirmação da tipografia original.

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

Abra um pull request de `develop` para `main`, preencha o template e aguarde a verificação automática. Integre por squash merge. Preserve a branch `develop` após o merge.

Antes de iniciar a próxima etapa, sincronize as duas branches sem reescrever o histórico:

```bash
git fetch origin
git switch develop
git merge origin/main -m "Sincroniza o desenvolvimento com a versão principal"
git push origin develop
```

O GitHub Actions verifica código e compilação nos pushes e pull requests destinados às duas branches. A `main` exige pull request, verificação automática aprovada e conversas resolvidas, inclusive para administradores. Não é exigida aprovação de outra pessoa, permitindo o trabalho individual.

README, documentação, mensagens de commit, títulos e descrições de pull requests devem ser escritos em português. Preserve os nomes técnicos exigidos pelas ferramentas.

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
- `src/index.css`: paleta, estilos globais e elementos compartilhados.
- `src/App.css`: estilos das seções e adaptação a telas menores.
- `public/`: arquivos estáticos.
- `.github/`: verificação automática e template de pull request.
