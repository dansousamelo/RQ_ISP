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
| 24/11/2023 | Daniel Veras e Paulo Almeida | 1.1 | Adicionando planejamento da Sprint 1 |
| 08/01/2024 | Daniel Veras e Paulo Almeida | 1.2 | Adicionando planejamento da Sprint 2 |
| 16/01/2024 | Daniel Veras e Paulo Almeida | 1.3 | Adicionando planejamento da Sprint 3 |
| 23/01/2024 | Daniel Veras e Paulo Almeida | 1.4 | Adicionando planejamento da Sprint 4 |
| 30/01/2024 | Daniel Veras e Paulo Almeida | 1.5 | Adicionando planejamento da Sprint 5 |
| 06/02/2024 | Daniel Veras e Paulo Almeida | 1.6 | Adicionando planejamento da Sprint 6 |
| 13/02/2024 | Daniel Veras e Paulo Almeida | 1.7 | Adicionando planejamento da Sprint 7 |
| 20/02/2024 | Daniel Veras e Paulo Almeida | 1.8 | Adicionando planejamento da Sprint 8 |
| 27/02/2024 | Daniel Veras e Paulo Almeida | 1.9 | Adicionando planejamento da Sprint 9 |
| 05/03/2024 | Daniel Veras e Paulo Almeida | 2.0 | Adicionando planejamento da Sprint 10 |
| 12/03/2024 | Daniel Veras e Paulo Almeida | 2.1 | Adicionando planejamento da Sprint 11 |



## Sprint 1

* Data de Início: 13/11/2023
* Data de Término: 19/11/2023

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
|   -    |  Configurar o ambiente de desenvolvimento  | - |
| HU01| Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 8 pontos |
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

## Sprint 4

* Data de Início: 23/01/2024
* Data de Término: 29/01/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU10| Eu, como um usuário, desejo poder imprimir os relatórios gerados. | 8 pontos |
| HU07 | Eu, como um usuário, desejo poder salvar uma inspeção completa.  | 5 pontos |


### HU10

Eu, como um usuário, desejo poder imprimir os relatórios gerados.

**Critérios de Aceitação:**

1. Deve haver uma pre visualização para poder escolher a impressora e configurações da página.
2. O usuário deve ser capaz de pré visualizar a página a ser impressa.


### HU07

Eu, como um usuário, desejo poder salvar uma inspeção completa.

**Critérios de Aceitação:**

1. Ao salvar uma inspeção deve haver uma mensagem avisando que a inspeção foi concluída.
2. Deve haver um endpoint para o client-side enviar os dados completos da inspeção.

## Sprint 5

* Data de Início: 30/01/2024
* Data de Término: 05/02/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU14 | Eu, como um usuário, desejo poder visualizar uma inspeção ao finalizá-la. | 5 pontos |
| HU23 | Eu, como um sistema, desejo manter o registro da última data em que uma inspeção foi alterada. | 5 pontos |


### HU14

Eu, como um usuário, desejo poder visualizar uma inspeção ao finalizá-la.

**Critérios de Aceitação:**

1. Ao listar a inspeção o status deve ser concluída.
2. Deve haver um endpoint para o client-side renderizar os itens da inspeção completa.
3. Deve haver um botão visualizar na listagem de inspeção.


### HU23

Eu, como um sistema, desejo manter o registro da última data em que uma inspeção foi alterada.

**Critérios de Aceitação:**

1. Ao executar alguma atualização em que envolva o envia de dados por parte do clien-side deve refletir na mensagem de última alteração.

## Sprint 6

* Data de Início: 06/02/2024
* Data de Término: 12/02/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU27 | Eu, como um usuário, desejo poder adicionar, visualizar e editar os participantes de uma inspeção. | 5 pontos |
| HU16 | Eu, como um usuário, desejo poder marcar rastros existentes em arquivos submetidos durante uma inspeção. | 5 pontos |

### HU27

Eu, como um usuário, desejo poder adicionar, visualizar e editar os participantes de uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma interface para adicionar, visualizar e editar participantes.
2. As alterações nos participantes devem ser refletidas na inspeção.


### HU16

Eu, como um usuário, desejo poder marcar rastros existentes em arquivos submetidos durante uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma opção para marcar rastros em arquivos submetidos.
2. As marcações devem ser armazenadas e exibidas adequadamente.

## Sprint 7

* Data de Início: 13/02/2024
* Data de Término: 19/02/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU24 | Eu, como um usuário, desejo poder excluir uma inspeção. | 5 pontos |
| HU03 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o responsável por uma inspeção. | 5 pontos |

### HU24

Eu, como um usuário, desejo poder excluir uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma opção para excluir uma inspeção.
2. A exclusão deve ser confirmada pelo usuário antes de ser executada.


### HU03

Eu, como um usuário, desejo poder adicionar, visualizar e editar o responsável por uma inspeção.

**Critérios de Aceitação:**

1. Deve haver campos para adicionar, visualizar e editar o responsável.
2. As alterações devem ser refletidas na inspeção.

## Sprint 8

* Data de Início: 20/02/2024
* Data de Término: 26/02/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU04 | Eu, como um usuário, desejo ser informado de minhas credenciais de acesso ao criar uma inspeção na página inicial. | 3 pontos |
| HU05 | Eu, como um usuário, desejo poder adicionar e gerenciar artefatos ao iniciar a criação de uma inspeção. | 3 pontos |

### HU04

Eu, como um usuário, desejo ser informado de minhas credenciais de acesso ao criar uma inspeção na página inicial.

**Critérios de Aceitação:**

1. Deve haver uma notificação ou indicação das credenciais necessárias ao criar uma inspeção.
2. As credenciais devem ser claras e fáceis de entender.


### HU05

Eu, como um usuário, desejo poder adicionar e gerenciar artefatos ao iniciar a criação de uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma interface para adicionar e gerenciar artefatos.
2. Os artefatos devem ser associáveis à inspeção e editáveis.

## Sprint 9

* Data de Início: 27/02/2024
* Data de Término: 04/03/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU06 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o nome de uma inspeção. | 3 pontos |
| HU11 | Eu, como um usuário, desejo poder anexar textos em um rastro de uma inspeção. | 3 pontos |

### HU06

Eu, como um usuário, desejo poder adicionar, visualizar e editar o nome de uma inspeção.

**Critérios de Aceitação:**

1. Deve haver campos para adicionar, visualizar e editar o nome da inspeção.
2. As alterações devem ser refletidas adequadamente.


### HU11

Eu, como um usuário, desejo poder anexar textos em um rastro de uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma opção para anexar textos em um rastro.
2. Os textos anexados devem ser exibidos adequadamente.


## Sprint 10

* Data de Início: 05/03/2024
* Data de Término: 11/03/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU12 | Eu, como um usuário, desejo poder anexar links externos em um rastro de uma inspeção. | 3 pontos |
| HU13 | Eu, como um usuário, desejo poder sair da aplicação. | 2 pontos |

### HU12

Eu, como um usuário, desejo poder anexar links externos em um rastro de uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma opção para anexar links externos em um rastro.
2. Os links anexados devem ser acessíveis e exibidos adequadamente.


### HU13

Eu, como um usuário, desejo poder sair da aplicação.

**Critérios de Aceitação:**

1. Deve haver uma opção clara para sair da aplicação.
2. A saída deve ser segura e sem perda de dados não salvos.

## Sprint 11

* Data de Início: 12/03/2024
* Data de Término: 19/03/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU17 | Eu, como um usuário, desejo poder limpar uma única marcação ou todas as marcações durante uma inspeção. | 3 pontos |
| HU18 | Eu, como um usuário, desejo poder adicionar, visualizar e editar um link para a gravação de uma inspeção. | 3 pontos |
| HU22 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o e-mail do responsável por uma inspeção. | 3 pontos |
| HU25 | Eu, como um usuário, desejo poder visualizar uma listagem de inspeções. | 3 pontos |
| HU26 | Eu, como um usuário, desejo poder iniciar outro fluxo de criação de inspeção. | 2 pontos |

### HU17

Eu, como um usuário, desejo poder limpar uma única marcação ou todas as marcações durante uma inspeção.

**Critérios de Aceitação:**

1. Deve haver uma opção para limpar uma única marcação.
2. Deve haver uma opção para limpar todas as marcações de uma vez.


### HU18

Eu, como um usuário, desejo poder adicionar, visualizar e editar um link para a gravação de uma inspeção.

**Critérios de Aceitação:**

1. Deve haver campos para adicionar, visualizar e editar o link da gravação.
2. O link deve ser acessível e exibido adequadamente.


### HU22

Eu, como um usuário, desejo poder adicionar, visualizar e editar o e-mail do responsável por uma inspeção.

**Critérios de Aceitação:**

1. Deve haver campos para adicionar, visualizar e editar o e-mail do responsável.
2. As alterações devem ser refletidas na inspeção.


### HU25

Eu, como um usuário, desejo poder visualizar uma listagem de inspeções.

**Critérios de Aceitação:**

1. Deve haver uma página ou interface para visualizar a listagem de inspeções.
2. As inspeções devem ser listadas de forma clara e organizada.


### HU26

Eu, como um usuário, desejo poder iniciar outro fluxo de criação de inspeção.

**Critérios de Aceitação:**

1. Deve haver uma opção para iniciar outro fluxo de criação de inspeção após finalizar uma.
2. O novo fluxo de criação deve ser iniciado sem perda de dados ou interferência na inspeção anterior.

## Sprint 12 

* Data de Início: 24/03/2024
* Data de Término: 30/03/2024

### Backlog da Sprint
| História de Usuário | Descrição | Pontuação |
|---------------------|-----------|-----------|
| HU42 | Eu, como um usuário, desejo poder exportar todos os itens e gráficos de uma inspeção em um arquivo só. | 3 pontos |
| - | Deploy da aplicação. | - |


### HU42

Eu, como um usuário, desejo poder exportar todos os itens e gráficos de uma inspeção em um arquivo só.

**Critérios de Aceitação:**

1. Deve haver uma opção para exportar tudo na aba de estatísticas.
2. Deve abrir um relatório mostrando os itens e gráficos de uma inspeção.


## Referências

 * Schwaber, K.; Beedle, M. Agile Software Development with Scrum. Pearson, 2002.