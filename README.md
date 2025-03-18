# Sistema de Compra de Ingressos

Este projeto simula um sistema de compra de ingressos online.

## Funcionalidades

* **Seleção de tipo de ingresso:** O usuário pode escolher entre os tipos de ingresso "pista", "superior" e "inferior".
* **Seleção de quantidade:** O usuário pode inserir a quantidade de ingressos desejada.
* **Verificação de estoque:** O sistema verifica se a quantidade desejada está disponível em estoque para o tipo de ingresso selecionado.
* **Atualização de estoque:** Após a compra, o sistema atualiza a quantidade de ingressos disponíveis em estoque.
* **Alertas:** O sistema exibe alertas caso a quantidade desejada seja maior que o estoque disponível.

## Conceitos JavaScript Utilizados

* **Manipulação do DOM:** O projeto utiliza JavaScript para acessar e modificar elementos HTML, como campos de entrada, botões e elementos de texto.
* **Eventos:** O projeto utiliza o evento `click` para acionar a função de compra quando o botão "Comprar" é clicado.
* **Funções:** O projeto utiliza funções para organizar o código e realizar tarefas específicas, como `comprar()`, `comprarPista()`, `comprarSuperior()` e `comprarInferior()`.
* **Condicionais:** O projeto utiliza estruturas condicionais `if/else` para verificar o tipo de ingresso selecionado e a disponibilidade de estoque.
* **Conversão de tipos:** O projeto utiliza as funções `parseInt()` para converter valores de string para números inteiros.
* **Alertas:** O projeto utiliza a função `alert()` para exibir mensagens de alerta ao usuário.
