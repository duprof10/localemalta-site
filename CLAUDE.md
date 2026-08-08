# CLAUDE.md — Local em Alta

## Idioma

Responda sempre em português do Brasil, incluindo relatórios, resumos, mensagens de commit e explicações.

## Confirmação de decisões estratégicas

Preços, serviços, posicionamento, regras comerciais e outras decisões permanentes são controlados pelo Projeto online do Claude.

Mesmo que o usuário informe um novo valor ou peça diretamente uma alteração, não implemente a mudança até confirmar que se trata de uma decisão estratégica aprovada.

Antes de alterar o código, pergunte:

> Esse valor ou regra já foi aprovado e está atualizado no Projeto online do Claude?

Somente continue quando o usuário responder claramente que a decisão está aprovada.

Não considere como confirmação suficiente:

- um valor mencionado isoladamente;
- um exemplo;
- uma hipótese;
- uma sugestão;
- um pedido de análise;
- a frase "faça a mudança" sem confirmação da decisão estratégica.

Quando a decisão ainda não estiver confirmada, não procure referências no código, não edite arquivos e não execute comandos relacionados à implementação.

## Regras comerciais permanentes

Estas regras valem para qualquer texto que apareça no site. Nunca escreva conteúdo que as contrarie, mesmo que pareça uma melhoria.

- **Nunca prometer posição no Google.** Nem primeiro lugar, nem melhora garantida, nem "seu site no topo das buscas".
- **Nunca publicar preço na homepage.** Preço vai apenas em proposta e apresentação de planos.
- **Vocabulário único dos planos:** Essencial, Profissional, Premium. Não criar, renomear nem combinar planos.
- **Nunca mencionar Google Ads, tráfego pago ou anúncios** em nenhum texto do site.
- **Nunca publicar métricas de cliente** — vendas, orçamentos, conversões, faturamento — nem como estimativa.
- **Público-alvo:** empresas de venda considerada, com especialidade em projetos B2B e industriais. Não escrever textos dirigidos a salões, oficinas, autônomos ou "pequenos negócios".

## Regras de Git

- Nunca usar `git add .` nem `git add -A`. Selecionar arquivos individualmente pelo nome.
- Nunca fazer commit ou push sem autorização explícita do usuário, pedida a cada operação.
- Antes de qualquer push, verificar `git remote -v` e confirmar que o remote é `duprof10/localemalta-site`. Se não for, parar e avisar.
- Antes de commitar, mostrar ao usuário exatamente quais arquivos foram alterados e o que mudou.

## Protocolo de duas fases

Toda tarefa segue esta ordem:

1. **Diagnóstico ou plano.** Ler, mapear e apresentar o que será feito. Nenhuma alteração.
2. **Aguardar autorização explícita do usuário.**
3. **Execução.** Somente o que foi autorizado.

Não presumir decisões estratégicas ausentes. Na dúvida, perguntar antes de agir.

## Formato das respostas

Prioridade obrigatória:

1. Cumprir integralmente a tarefa principal.
2. Só depois, apresentar um resumo executivo curto.
3. Nunca substituir a entrega principal pelo resumo.

Se a tarefa pedir arquivo completo, conteúdo literal, código integral, relatório detalhado ou lista completa, entregar exatamente isso antes do resumo.

O resumo executivo deve conter:

- o que foi encontrado ou alterado;
- arquivos envolvidos;
- riscos, erros, conflitos ou pendências;
- testes ou verificações realizados;
- próxima decisão necessária.

Não incluir comandos executados, raciocínio interno, histórico detalhado nem conteúdo duplicado.

## Escopo

- Alterar somente o que foi solicitado.
- Não corrigir, reorganizar nem "melhorar" o que não faz parte da tarefa atual.
- Melhorias percebidas fora do escopo devem ser apenas relatadas ao final, não implementadas.
- Antes de declarar uma imagem como não utilizada, verificar também `background` e `url()` nos arquivos CSS, não apenas o HTML.
