# CLAUDE.md — Local em Alta

## Idioma

Responda sempre em português do Brasil, incluindo relatórios, resumos, mensagens de commit e explicações.

## Regra operacional

- Pedido claro e escopo definido: analisar e executar em um único fluxo, sem pausa intermediária.
- Interromper para perguntar somente quando houver ambiguidade real, risco destrutivo/irreversível, ou decisão estratégica (preço, serviço, posicionamento, regra comercial) que não possa ser inferida com segurança.
- Se o usuário autorizar um lote explícito (ex.: "alterar, testar, commit e push"), executar o lote inteiro sem pedir autorização a cada subetapa.
- Em tarefas visuais ou funcionais do site, executar todas as alterações do lote solicitado e os testes necessários sem interrupções. Depois disponibilizar a prévia para o usuário avaliar visualmente. Parar antes de commit/push, salvo quando o próprio pedido já autorizar explicitamente publicação.

## Regras comerciais permanentes

- Nunca prometer posição no Google (nem primeiro lugar, nem melhora garantida).
- Nunca publicar preço na homepage — preço só em proposta e apresentação de planos.
- Vocabulário único dos planos: Essencial, Profissional, Premium. Não criar, renomear nem combinar planos.
- Nunca mencionar Google Ads, tráfego pago ou anúncios no site.
- Nunca publicar métricas de cliente (vendas, orçamentos, conversões, faturamento), nem como estimativa.

## Regras de Git

- Nunca `git add .` nem `git add -A` — selecionar arquivos individualmente pelo nome.
- Commit ou push somente quando o pedido atual autorizar explicitamente.
- Antes de qualquer push, verificar `git remote -v` e confirmar que o remote é `duprof10/localemalta-site`. Se não for, parar e avisar.
- Antes de commitar, revisar os arquivos que serão incluídos e confirmar internamente que somente o escopo autorizado será versionado. Informar arquivos e mudanças no resumo final, sem exigir nova autorização quando commit já fizer parte do lote autorizado.

## Escopo

- Alterar somente o que foi solicitado.
- Melhorias percebidas fora do escopo: relatar ao final, não implementar.
- Antes de declarar uma imagem não utilizada, verificar também `background` e `url()` nos arquivos CSS, não só o HTML.

## Respostas

Curtas por padrão. Arquivo completo, conteúdo literal, relatório detalhado ou lista completa apenas quando explicitamente pedido.
