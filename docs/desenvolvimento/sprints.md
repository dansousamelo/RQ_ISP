<br/>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/sprintIcon.png" width="200" height="200" />
</div>

<br/>
<p>Este documento tem a finalidade de documentar o planejamento das sprints de desenvolvimente do projeto.</p>

## Histórico de versões

| Data | Autor | Versão | Alteração |   
| ---- | ------ | ------ | ------ |
| 24/11/2023 | Daniel Veras e Paulo Almeida | 1.0 | Criando documento de Sprint Overview |


## Sprint 1

* Data de Início: 13/11/2023
* Data de Término: 19/11/2023

### Objetivo da Sprint
O objetivo desta sprint é implementar as primeiras funcionalidades da aplicação RQ_ISP.

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
|       |  Configurar o ambiente de desenvolvimento  | 5 pontos |
| HU002 | Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 5 pontos |
| HU003 | Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes.  | 8 pontos |
| HU004 | Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção. | Primeira etapa do formulário de criação de inspeção | 2 pontos |

### Configuraçãos iniciais

Consiste em iniciar os projetos em cada um dos seus contextos.

**Critérios de Aceitação:**

1. Iniciar repositório frontend.
2. Iniciar repositório backend.
3. Iniciar banco de dados.
4. Iniciar repositório de documentação.


### HU01

Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção.

**Critérios de Aceitação:**

1. Deve haver um botão visível e acessível na página inicial com a opção de "Iniciar inspeção".
2. Deve haver informações disponíveis sobre como iniciar uma inspeção.
3. Caso o usuário possua um código de acesso, o sistema deve fornecer um aviso orientando-o a prosseguir para a tela de acesso à lista de verificação.
4. Após clicar no botão "Iniciar inspeção", o usuário deverá ser imediatamente direcionado para a primeira tela do formulário de criação de inspeção.
5. A tela de início de uma inspeção está acessível por meio de um ícone dedicado.
6. Deve conter o nome dos responsáveis do projeto.

### HU02

Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes.

**Critérios de Aceitação:**

1. Deve ser disponibilizada uma opção para que o usuário insira o seu código de acesso e o submeta.
2. Deve haver informações claras e disponíveis sobre como acessar a lista de inspeções.
3. A tela de acesso à lista de inspeções está disponível para acesso por meio de um ícone específico.
4. Deve haver feedback claro para o usuário, como mensagens de erro ou confirmação, caso ocorram problemas durante o processo de criação da inspeção.
5. Ao submeter o código de acesso, deve existir um estado de espera.
6. Ao submeter o código de acesso, o usuário deve ser autenticado.
7. Deve conter o nome dos responsáveis do projeto.

### HU21

Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção.

**Critérios de Aceitação:**

1. O usuário tem a opção de escolher o modelo de lista de verificação "Taxonomia de Requisitos de Privacidade Baseada na LGPD e ISO/IEC 29100".
2. O usuário tem a opção de escolher o modelo de lista de verificação "Verificação de artefato - Estória de Usuário".
3. O usuário deve ter a capacidade de cancelar a seleção do modelo de lista de verificação.
4. Deve conter o nome dos responsáveis do projeto.


### Tarefas Atribuídas
| Tarefa | Responsável | Status |
|--------|-------------|--------|
| Configurações iniciais | Paulo e Daniel | Realizada |
| HU01 | Paulo e Daniel | Realizada |
| HU02 | Paulo e Daniel | Realizada |
| HU21 | Daniel | Realizada |


### Reuniões de Sprint
- **Reunião de Planejamento da Sprint**: 11/11/2023

### Objetivos Pessoais
- **Paulo**: Concluir tarefas e aprimorar conhecimentos sobre banco de dados.
- **Daniel**: Concluir tarefas e aprimorar conteúdos sobre programação backend.


## Referências

 * Schwaber, K.; Beedle, M. Agile Software Development with Scrum. Pearson, 2002.