# Essenza Dental

Landing page de uma clínica odontológica, com apresentação da clínica, tratamentos, equipe e agendamento pelo WhatsApp.

Projeto em desenvolvimento, com layout responsivo para celular, tablet e desktop. Os dados da clínica, os perfis e os depoimentos são fictícios nesta versão.

## Tecnologias

React, TypeScript, Vite, CSS e Oxlint. GitHub Actions para verificação de código e compilação.

## Executar localmente

Requisitos: Node.js 24 e npm.

```bash
npm ci
npm run dev
```

Acesse o endereço exibido no terminal.

## Comandos

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Verifica o código |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve a compilação localmente |

## Funcionalidades

- Navegação por seções e menu recolhível abaixo de 1200 px.
- Apresentação da clínica, tratamentos, equipe e diferenciais.
- Carrossel de depoimentos e perguntas frequentes expansíveis.
- Agendamento pelo WhatsApp e telefone clicável.
- Navegação por teclado e suporte à preferência por movimento reduzido.

## Estrutura

```text
src/
  components/  Componentes e estilos de cada seção
  config/      Configuração de contato
  dados/       Conteúdo da página
  App.tsx      Composição das seções
  index.css    Paleta e estilos globais
public/
  imagens/     Fotos locais
.github/
  workflows/   Verificação automática
```

## Personalizar o conteúdo

| Conteúdo | Arquivo |
| --- | --- |
| Telefone e WhatsApp | `src/config/contato.ts` |
| Endereço e horários | `src/dados/informacoesClinica.ts` |
| Tratamentos | `src/dados/tratamentos.ts` |
| Equipe | `src/dados/equipe.ts` |
| Depoimentos | `src/dados/experiencias.ts` |
| Perguntas frequentes | `src/dados/perguntasFrequentes.ts` |
| Cores e estilos globais | `src/index.css` |

As fotos são provisórias, do Unsplash. Nomes, especialidades, depoimentos, endereço, horários e indicadores precisam ser revisados antes da publicação. A tipografia e o símbolo da marca também são provisórios.

## Paleta de cores

| Cor | Código |
| --- | --- |
| Verde gelo | `#EFF9F7` |
| Branco | `#FFFFFF` |
| Verde principal | `#3D9B8D` |
| Verde escuro | `#173F38` |
| Cinza suave | `#F1F2F2` |

## Fluxo de desenvolvimento

- `develop`: integração das funcionalidades durante o desenvolvimento.
- `main`: versão principal, reservada à release final.
- Cada tarefa parte de uma branch criada a partir de `develop`, com PR de volta para `develop`.
- Commits separados por alteração, com mensagens, títulos e descrições de PR em português.
- Antes do PR: `npm run lint` e `npm run build`.
- Merge com preservação dos commits. A branch `develop` é permanente.

```bash
git switch develop
git pull --ff-only origin develop
git switch -c feat/nome-da-tarefa
```

Ao finalizar o projeto: PR de `develop` para `main`, tag `v1.0.0` e release com notas em português.
