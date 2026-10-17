# Orientações do projeto

- Escreva README, documentação, mensagens de commit, títulos e descrições de pull requests em português.
- Mantenha o README direto e escrito como documentação do próprio projeto, sem relatos da conversa, referências ao usuário como responsável ou histórico de execução do assistente.
- Mantenha as branches permanentes `main` e `develop`.
- Crie branches temporárias a partir de `develop` para cada etapa e abra seus pull requests com destino exclusivo à `develop`.
- Não abra PR, faça merge ou envie alterações à `main` durante o desenvolvimento. A integração à `main` é exclusiva da release final, após autorização explícita do usuário.
- Acumule as etapas na `develop`. Abra o PR para `main` somente quando o projeto estiver pronto para a release final `v1.0.0`; não abra PR a cada etapa.
- Não exclua a `develop` após integrar um pull request.
- Use a paleta oficial registrada no README e preserve a referência visual do vídeo fornecido pelo usuário.
- Execute `npm run lint` e `npm run build` antes de enviar uma etapa para revisão.
- Separe os commits por mudança coerente; evite reunir componentes, responsividade e documentação em um único commit.
- Implemente cada etapa para celular, tablet e desktop e confira o comportamento nessas faixas de tela.
