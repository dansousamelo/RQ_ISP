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

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
|   -    |  Configurar o ambiente de desenvolvimento  | - |
| HU01| Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 5 pontos |
| HU02 | Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes.  | 5 pontos |
| HU21 | Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção. | 8 pontos |

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

## Sprint 2

* Data de Início: 08/01/2024
* Data de Término: 15/01/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU20| Eu, como um usuário, desejo poder exportar os dados obtidos em uma inspeção. | 13 pontos |
| HU19 | Eu, como um usuário, desejo poder visualizar gráficos com a situação dos itens inspecionados.  | 8 pontos |
| HU08 | Eu, como um usuário, desejo poder salvar uma inspeção incompleta. | 5 pontos |

### HU20

Eu, como um usuário, desejo poder exportar os dados obtidos em uma inspeção.

**Critérios de Aceitação:**

1. Deve haver um botão para "Exportar itens" .
2. Deve haver um endpoint para o client-side consumir todos os itens.


### HU19

Eu, como um usuário, desejo poder visualizar gráficos com a situação dos itens inspecionados.

**Critérios de Aceitação:**

1. Ao entrar na tela de estatísticas devo ser capaz de visualizar os gráficos tanto para inspeções com e sem categorias.
2. Deve haver um endpoint para o client-side consumir os dados dos gráficos.
3. Quando houver categoria deve ter um endpoint para listar todas as categorias.


### HU08

Eu, como um usuário, desejo poder salvar uma inspeção incompleta.

**Critérios de Aceitação:**

1. Deve ter um botão para salvar a inspeção.
2. Deve haver um endpoint para o client-side enviar os dados incompletos.

## Sprint 3

* Data de Início: 16/01/2024
* Data de Término: 22/01/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU15| Eu, como um usuário, desejo poder submeter arquivos para cada um dos itens ao realizar uma inspeção. | 8 pontos |
| HU09 | Eu, como um usuário, desejo poder visualizar o progresso de uma inspeção através do status de quantos itens já foram inspecionados.  | 8 pontos |


### HU15

Eu, como um usuário, desejo poder submeter arquivos para cada um dos itens ao realizar uma inspeção.

**Critérios de Aceitação:**

1. Deve haver um componente para subir arquivos no client-side .
2. Deve haver um endpoint para o client-side subir os arquivos.
2. Deve haver um endpoint para o client-side excluir os arquivos.


### HU09

Eu, como um usuário, desejo poder visualizar o progresso de uma inspeção através do status de quantos itens já foram inspecionados.

**Critérios de Aceitação:**

1. Deve calcular de acordo com a situação do item.
2. Deve haver um endpoint para o client-side consumir os dados dos gráficos.
3. Quando houver categoria deve ter um endpoint para listar todas as categorias.


## Referências

 * Schwaber, K.; Beedle, M. Agile Software Development with Scrum. Pearson, 2002.