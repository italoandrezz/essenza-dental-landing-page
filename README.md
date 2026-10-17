# Essenza Dental

Landing page de uma clínica odontológica, com apresentação da clínica, tratamentos, equipe e agendamento pelo WhatsApp.

Versão 1.0.0, com layout responsivo para celular, tablet e desktop. Os dados da clínica, os perfis e os depoimentos são fictícios nesta versão de apresentação.

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
- Fotos em WebP com tamanhos responsivos e carregamento prioritário da imagem inicial.

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
| Telefone, e-mail, WhatsApp e Instagram | `src/config/contato.ts` |
| Endereço e horários | `src/dados/informacoesClinica.ts` |
| Tratamentos | `src/dados/tratamentos.ts` |
| Equipe | `src/dados/equipe.ts` |
| Depoimentos | `src/dados/experiencias.ts` |
| Perguntas frequentes | `src/dados/perguntasFrequentes.ts` |
| Cores e estilos globais | `src/index.css` |

As fotos são ilustrativas, do Unsplash. Nomes, especialidades, depoimentos, endereço, horários e indicadores são demonstrativos. Para uso por uma clínica real, substitua esses dados e confirme a identidade visual.

O e-mail do rodapé segue a referência visual. O Instagram aponta para o perfil oficial `@instagram`, pois a clínica é fictícia; o endereço pode ser alterado em `src/config/contato.ts`.

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
- `main`: versões estáveis publicadas por release.
- Cada tarefa parte de uma branch criada a partir de `develop`, com PR de volta para `develop`.
- Commits separados por alteração, com mensagens, títulos e descrições de PR em português.
- Antes do PR: `npm run lint` e `npm run build`.
- Merge com preservação dos commits. A branch `develop` é permanente.

```bash
git switch develop
git pull --ff-only origin develop
git switch -c feat/nome-da-tarefa
```

Para publicar uma versão: PR de `develop` para `main` após validação, seguido de tag e release com notas em português.

## Versão

[Release v1.0.0](https://github.com/italoandrezz/essenza-dental-landing-page/releases/tag/v1.0.0). Alterações em [CHANGELOG.md](CHANGELOG.md).

A compilação gera arquivos estáticos em `dist/`, prontos para hospedagem.
