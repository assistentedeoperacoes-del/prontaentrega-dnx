# Book de Pronta Entrega DNX (com atualizacao em tempo real)

Este projeto publica o catalogo exatamente como ele foi entregue (public/index.html),
sem nenhuma alteracao de conteudo, layout ou fotos.

A unica mudanca feita foi adicionar, no fim do arquivo, um pequeno bloco de
sincronizacao que:

- ao abrir a pagina, busca as edicoes mais recentes salvas por qualquer pessoa
  da equipe e atualiza a tela na hora;
- sempre que alguem clica em "Salvar" em um produto, remove um item de
  oportunidade ou confirma o formulario de novo produto, envia essa edicao
  para o servidor;
- a cada 20 segundos, busca novamente do servidor, entao quem estiver com a
  pagina aberta ve as mudancas de outras pessoas sem precisar recarregar.

As fotos continuam embutidas no HTML (nao mudam). O que passa a ser
compartilhado entre todo mundo sao os campos editaveis: nome, medida, valores,
ambiente, quantidade vendida, status, capa customizada, linha smart,
oportunidade e os produtos avulsos de oportunidade.

## Publicar no GitHub e no Netlify

1. Extraia esta pasta e envie o conteudo para o repositorio no GitHub
   (pode ser o mesmo repositorio que ja existe, substituindo os arquivos).
2. No Netlify, crie ou reuse o site conectado a esse repositorio.
   - Publish directory: `public`
   - Functions directory: `netlify/functions` (o netlify.toml ja define isso)
   - Sem build command necessario
3. Nao precisa configurar nenhuma variavel de ambiente. O armazenamento
   compartilhado (Netlify Blobs) funciona automaticamente assim que o site
   esta rodando dentro do Netlify.
4. Depois do primeiro deploy, o link do site ja funciona para toda a equipe:
   quem abrir o link ve o catalogo, edita com a senha de sempre (EZ2026), e a
   edicao aparece para todo mundo em poucos segundos.

## Se quiser voltar a exportar um HTML offline

O botao de menu "Salvar HTML atualizado" continua funcionando exatamente como
antes: ele gera um arquivo novo com o estado atual embutido, para quem quiser
guardar uma copia offline.
