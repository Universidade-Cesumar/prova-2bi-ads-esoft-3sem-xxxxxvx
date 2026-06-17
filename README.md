# Sistema de Controle de Almoxarifado

O almoxarifado do curso técnico de Enfermagem do SENAC Zona Norte é responsável por fornecer seringas, luvas, máscaras e outros materiais usados nas aulas práticas. O controle atual é feito em planilha, o que dificulta a visibilidade do estoque e o registro das baixas diárias feitas pelos professores.
Para resolver isso, será desenvolvida uma aplicação web que permite cadastrar materiais, visualizar o estoque em tempo real e registrar cada saída com data, quantidade, destino e responsável.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript com `fetch` / `async/await`
- [MockAPI.io](https://mockapi.io) — simula uma API RESTful na nuvem sem necessidade de servidor ou banco de dados real

## Sprints

| Sprint | Objetivo | Status |
|--------|----------|--------|
| 1 | Fazer a base do sistema: interface inicial, formulário de cadastro de materiais e tabela de listagem consumindo a MockAPI (GET e POST). | ✅ Concluído |
| 2 | Módulo de retirada (baixa de estoque via PUT) e exclusão de materiais (DELETE), com validação de quantidade | ✅ Concluído |
| 3 | ... (Próximas entregas) | Em breve... |

## Funcionalidades

### Sprint 1
- Cadastro de novos materiais com nome, quantidade, unidade e observações
- Listagem de todos os materiais consumindo a API (GET)
- Registro automático da data de cadastro

### Sprint 2
- Baixa de estoque: campo por item para subtrair quantidades com atualização no servidor (PUT)
- Validação que impede retiradas com valor zero, negativo ou maior que o estoque
- Exclusão de materiais com confirmação do usuário (DELETE)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/B74p-HKt)
