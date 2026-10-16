# Essenza Dental

Estrutura inicial da landing page com React, TypeScript e Vite.
A implementação visual será feita nas próximas etapas, usando o vídeo de referência.

## Desenvolvimento local

Requisito: Node.js 24 e npm.

```bash
npm ci
npm run dev
```

Abra o endereço local exibido pelo Vite.

```bash
npm run lint
npm run build
npm run preview
```

## Fluxo de contribuição

A branch principal é `main`. Crie uma branch para cada alteração:

```bash
git switch main
git pull --ff-only
git switch -c feat/nome-da-alteracao
```

Depois de implementar e validar:

```bash
git add .
git commit -m "feat: descreve a alteracao"
git push -u origin feat/nome-da-alteracao
```

Abra um pull request com destino à `main` e preencha o template.
O GitHub Actions executa lint e build em cada PR e push para `main`.
Use squash merge para integrar a alteração e remova a branch após o merge.

## Estrutura

- `src/`: componentes, estilos e entrada da aplicação.
- `public/`: arquivos estáticos.
- `.github/`: integração contínua e template de pull request.

O commit inicial contém apenas a base do projeto e sua configuração de colaboração.
