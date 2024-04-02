<br/>

<div style="display: flex; flex-direction: column; justify-content: center; align-items:center;">
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/backlog/BACKLOG-ICON.png" width="200" height="200" />
</div>

<br/>
<p align="flex-direction: column; justify">Neste documento, são delineados os passos envolvidos na elaboração do <i>Product Backlog</i>, destacando cada fase do processo e documentando os artefatos gerados ao longo do percurso.</p>

## Histórico de versões

| Data | Autor | Versão | Alteração |   
| ---- | ------ | ------ | ------ |
| 27/11/2023 | Daniel Veras e Paulo Almeida | 1.0 | Criando documento do Product Backlog |
| 28/11/2023 | Daniel Veras e Paulo Almeida | 1.0 | Corrigindo histórias de usuário |
| 30/03/2024 | Daniel Veras e Paulo Almeida | 1.0 | Adicionando histórias de usuário de acordo com o feedback de clientes |

## Introdução
O *Product Backlog*, ou *Backlog* do produto, é um conceito fundamental na metodologia ágil, especialmente no framework *Scrum*. Trata-se de uma lista dinâmica e prioritizada de funcionalidades, melhorias e requisitos que compõem o produto a ser desenvolvido. Os itens no *Product Backlog* podem variar em termos de complexidade, esforço necessário para implementação e valor para o usuário final. Eles são frequentemente descritos em termos de histórias de usuário, que são pequenas narrativas centradas no usuário que descrevem uma funcionalidade desejada (Schwaber; Sutherland, 2017).

O <i>Backlog</i> do produto, deste projeto, foi construído combinando os requisitos, funcionais e não funcionais, coletados em cada etapa do processo de elaboração do *Lean Inception*. Os requisitos funcionais são aqueles que delineiam as necessidades, características e funcionalidades essenciais do produto de software, já os requisitos não funcionais focam nas qualidades e restrições que o produto deve cumprir, abrangendo aspectos como desempenho, segurança e usabilidade (Sommerville, 2011.). 

As histórias de usuários são agrupadas e organizadas de acordo com seus épicos correspondentes, proporcionando uma estrutura que visa simplificar a gestão de requisitos em uma escala mais abrangente (Cohn, 2004). Os épicos estabelecidos nesta fase são: "Navegação Inicial", "Gerência de Inspeção de Artefatos", "Inspeção de Artefatos", "Rastreabilidade de Itens de uma Inspeção", "Análise de Resultados", "Criação Personalizada de Lista de Verificação", "Gerência de Criação de Lista de Verificação". Cada épico será explicado individulamente nas Seções a seguir.

E por fim, para calcular a pontuação de cada história, foi utilizada a sequência de Fibonacci. Este método reconhece a importância de atribuir valores que representem com precisão a complexidade relativa de cada tarefa. A sequência de Fibonacci, conhecida por seu crescimento exponencial, foi usada para criar um sistema que efetivamente abrange as variações de esforço e complexidade. As pontuações, que variam de 0 a 13, foram organizados de maneira a facilitar a priorização de histórias, otimizar o uso de recursos e tornar o desenvolvimento o mais eficiente possível (Conh, 2005). 


## Requisitos Funcionais
Neste tópico, apresentam-se as histórias de usuários organizadas de acordo com seus respectivos épicos e derivam dos requisitos funcionais coletados durante a fase de coleta e refinamento dos requisitos. Cada um destes épicos, juntamente com suas histórias de usuários correspondentes, é descrito em detalhes nas subseções seguintes.

### Navegação Inicial
No épico de navegação inicial estão todas as histórias de usuário relacionadas ao acesso inicial e à organização de inspeções na página inicial. Estas histórias abordam desde o início do processo de criação de uma inspeção até o acesso e a gestão das informações de credenciais. A Tabela 1 apresenta as histórias de usuário e suas respectivas pontuações do épico Navegação Inicial.

<figure style="text-align: center;">Tabela 1: Histórias usuário relacionadas ao Épico de Navegação Inicial.</figure>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU01 | Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 8 |
| HU02 | Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes. | 5 |
| HU04 | Eu, como um usuário, desejo ser informado de minhas credenciais de acesso ao criar uma inspeção na página inicial. | 3 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Gerência de Inspeção de Artefatos
O épico de gerência de inspeção de artefatos concentra-se no controle e supervisão eficazes das inspeções. Aqui, as histórias de usuário abrangem um leque de funcionalidades, desde a visualização até a edição e exclusão de inspeções, passando pela administração dos participantes e liderança das inspeções. As especificidades dessas histórias, juntamente com suas pontuações, são apresentadas na Tabela 2, dedicada a este épico.

<p style="text-align: center;">Tabela 2: Histórias usuário relacionadas ao Épico de Gerência de Inspeção de Artefatos.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU03 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o responsável por uma inspeção. | 5 |
| HU06 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o nome de uma inspeção. | 3 |
| HU13 | Eu, como um usuário, desejo poder sair da aplicação. | 2 |
| HU14 | Eu, como um usuário, desejo poder visualizar uma inspeção ao finalizá-la. | 5 |
| HU18 | Eu, como um usuário, desejo poder adicionar, visualizar e editar um link para a gravação de uma inspeção. | 3 |
| HU22 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o e-mail do responsável por uma inspeção. | 3 |
| HU23 | Eu, como um sistema, desejo manter o registro da última data em que uma inspeção foi alterada. | 5 |
| HU24 | Eu, como um usuário, desejo poder excluir uma inspeção. | 5 |
| HU25 | Eu, como um usuário, desejo poder visualizar uma listagem de inspeções. | 3 |
| HU26 | Eu, como um usuário, desejo poder iniciar outro fluxo de criação de inspeção. | 2 |
| HU27 | Eu, como um usuário, desejo poder adicionar, visualizar e editar os participantes de uma inspeção. | 5 |
| HU28 | Eu, como um usuário, desejo poder adicionar, visualizar e editar qual é o cronograma de inspeção. | 3 |
| HU29 | Eu, como um usuário, desejo poder buscar uma inspeção. | 2 |
| HU33 | Eu, como um usuário, desejo poder filtrar a listagem de inspeções exibidas. | 3 |
| HU45 | Eu, como um usuário desejo poder visualizar uma inspeção de forma paginada. | 13 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Inspeção de Artefatos
Dedicado ao núcleo do processo de inspeção, o épico de inspeção de artefatos trata das operações essenciais para a execução das inspeções. Este segmento inclui histórias de usuário que cobrem desde o salvamento de inspeções completas ou parciais até o monitoramento do progresso das inspeções, incluindo a seleção de modelos para as listas de verificação. A Tabela 3 fornece um detalhamento completo destas histórias e suas respectivas pontuações.

<p style="text-align: center;">Tabela 3: Histórias usuário relacionadas ao Épico de Inspeção de Artefatos.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU05 | Eu, como um usuário, desejo poder adicionar e gerenciar artefatos ao iniciar a criação de uma inspeção. | 3 |
| HU07 | Eu, como um usuário, desejo poder salvar uma inspeção completa. | 5 |
| HU08 | Eu, como um usuário, desejo poder salvar uma inspeção incompleta. | 5 |
| HU09 | Eu, como um usuário, desejo poder visualizar o progresso de uma inspeção através do status de quantos itens já foram inspecionados. | 8 |
| HU21 | Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção. | 8 |




<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Rastreabilidade de Itens de uma Inspeção
O foco do épico de rastreabilidade de Itens de uma Inspeção está na gestão detalhada dos artefatos envolvidos nas inspeções. As histórias de usuário deste épico lidam com a inclusão e manipulação de artefatos, desde a adição inicial até a marcação detalhada e ajustes necessários. Informações detalhadas sobre estas histórias e suas avaliações podem ser encontradas na Tabela 4.

<p style="text-align: center;">Tabela 4: Histórias usuário relacionadas ao Épico de Rastreabilidade de Itens de uma Inspeção.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU11 | Eu, como um usuário, desejo poder anexar textos em um rastro de uma inspeção. | 3 |
| HU12 | Eu, como um usuário, desejo poder anexar links externos em um rastro de uma inspeção. | 3 |
| HU15 | Eu, como um usuário, desejo poder submeter arquivos para cada um dos itens ao realizar uma inspeção. | 8 |
| HU16 | Eu, como um usuário, desejo poder marcar rastros existentes em arquivos submetidos durante uma inspeção. | 5 |
| HU17 | Eu, como um usuário, desejo poder limpar uma única marcação ou todas as marcações durante uma inspeção. | 3 |
| HU41 | Eu, como um usuário, desejo poder utilizar imagens como rastro. | 5 |
| HU47 | Eu, como usuário, desejo que ao marcar um rastro de um item, a descrição correspondente seja exibida, sem a necessidade de voltar ou procurar pela descrição em outro lugar. | 5 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Análise de Resultados
O épico de análise de resultados é orientado para a avaliação e a disseminação dos dados coletados nas inspeções. As histórias de usuário aqui descrevem desde a visualização de dados em formatos gráficos até a exportação de dados e arquivos para uso externo, garantindo uma compreensão ampla dos resultados das inspeções. Estas histórias e suas pontuações são detalhadas na Tabela 5.

<p style="text-align: center;">Tabela 5: Histórias usuário relacionadas ao Épico de Análise de Resultados.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU10 | Eu, como um usuário, desejo poder imprimir os relatórios gerados. | 8 |
| HU19 | Eu, como um usuário, desejo poder visualizar gráficos com a situação dos itens inspecionados. | 8 |
| HU20 | Eu, como um usuário, desejo poder exportar os dados obtidos em uma inspeção. | 13 |
| HU42 | Eu, como um usuário, desejo poder exportar todos os itens e gráficos de uma inspeção em um arquivo só. | 3 |
| HU43 | Eu, como um usuário, desejo poder visualizar os gráficos através de gráficos de pizza. | 5 |
| HU44 | Eu, como um usuário, desejo poder exportar gráficos de pizza. | 5 |
| HU46 | Eu, como usuário, desejo ter mais funcionalidades interativas com o gráfico na seção de estatísticas, a fim de facilitar a análise e compreensão dos dados. | 8 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Criação Personalizada de Lista de Verificação
O épico de Criação Personalizada de lista de verificação foca na habilidade do usuário de moldar listas de verificação de acordo com suas necessidades específicas no contexto de inspeção. Este conjunto de histórias de usuário explora desde a criação de listas customizadas até a implementação de medidas de segurança, como códigos de acesso e IDs. Além disso, inclui a funcionalidade de visualizar listas pré-existentes para inspiração e prevenção de redundâncias. Detalhes sobre estas histórias e suas pontuações são encontrados na Tabela 6.

<p style="text-align: center;">Tabela 6: Histórias usuário relacionadas ao Épico de Criação Personalizada de Lista de Verificação.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU30 | Eu, como um usuário, desejo poder criar uma lista de verificação personalizada. | 13 |
| HU31 | Eu, como um sistema, desejo gerar um código de acesso ao criar uma lista de verificação personalizada. | 5 |
| HU32 | Eu, como um usuário, desejo ser perguntado se possuo um ID e senha ao criar uma lista de verificação para atribuir a ela. | 3 |
| HU38 | Eu, como um usuário, desejo poder visualizar uma listagem de todas as minhas listas de verificação. | 5 |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Gerência de Lista de Verificação
O épico de gerência de lista de verificação aborda o gerenciamento efetivo das listas de verificação após sua criação. As histórias de usuário aqui permitem ao usuário editar, exportar, excluir e duplicar listas de verificação, além de fornecerem uma visão geral de todas as listas criadas. Esta seção também destaca a funcionalidade de filtragem das listas, facilitando a localização rápida com base em títulos ou datas. A Tabela 7 apresenta um resumo dessas histórias de usuário, juntamente com suas respectivas pontuações.

<p style="text-align: center;">Tabela 7: Histórias usuário relacionadas ao Épico de Criação Personalizada de Lista de Verificação.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU34 | Eu, como um usuário, desejo poder visualizar as listas de verificação existentes ao criar uma nova lista de verificação. | 5 |
| HU35 | Eu, como um usuário, desejo poder editar uma lista de verificação. | 13 |
| HU36 | Eu, como um usuário, desejo poder exportar uma lista de verificação. | 3 |
| HU37 | Eu, como um usuário, desejo poder excluir uma lista de verificação. | 3 |
| HU39 | Eu, como um usuário, desejo poder duplicar uma lista de verificação. | 3 |
| HU40 | Eu, como um usuário, desejo poder filtrar a listagem de listas de verificação por título e/ou data. | 3 |





<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

## Requisitos não funcionais
Neste tópico, são apresentados os requisitos não funcionais, os quais foram organizados em 5 categorias distintas: usabilidade, portabilidade, confiabilidade, eficiência e segurança. Os detalhes específicos de cada categoria serão abordados a seguir.

### Usabilidade
Neste tópico são apresentados requisitos não funcionais relacionados à usabilidade da interface de autenticação. A ênfase está na criação de uma experiência do usuário intuitiva, em conformidade com as diretrizes de design. A Tabela 8 fornece detalhes sobre os requisitos não funcionais específicos para usabilidade.

<p style="text-align: center;">Tabela 8: Requisitos Não Funcional de Usabilidade.</p>

| Item   | Requisito não funcional                                                                                         |
|--------|-----------------------------------------------------------------------------------------------------------------|
| RQNF01 | A interface de autenticação deve ser projetada de forma intuitiva, seguindo as diretrizes de design de experiência do usuário. |
| RQNF02 | Os avisos sobre o uso de *cookies* devem ser apresentados de forma clara e fácil de entender para os usuários.        |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Portabilidade
Este tópico aborda um requisito não funcional de portabilidade do sistema. O objetivo é garantir que o sistema seja acessível de maneira consistente em uma variedade de navegadores populares. Consulte a Tabela 9 para obter detalhes sobre o requisito relacionado à portabilidade.

<p style="text-align: center;">Tabela 9: Requisito Não Funcional de Portabilidade.</p>

| Item   | Requisito não funcional                                                                                             |
|--------|---------------------------------------------------------------------------------------------------------------------|
| RQNF03 | O sistema de autenticação deve ser compatível com os principais navegadores da web, como Chrome, Firefox, Safari e Edge. |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Confiabilidade
Nesta seção, é apresentado um requisito não funcional relacionado à confiabilidade. É crucial que os cookies mantenham uma vida útil adequada e não expirem prematuramente, a menos que o usuário escolha sair ou retirar seu consentimento. A Tabela 10 apresenta uma visão geral do requisito não funcional que garante a confiabilidade.

<p style="text-align: center;">Tabela 10: Requisito Não Funcional de Confiabilidade.</p>

| Item   | Requisito não funcional                                                                                                           |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| RQNF04 | Os *cookies* devem ter uma vida útil adequada e não expirar de forma prematura, a menos que o usuário opte por sair ou revogar seu consentimento. |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Eficiência
Aqui, é explorado um requisito não funcional relacionado à eficiência do sistema. Isso implica que o sistema deve ser capaz de fornecer respostas em tempo real de maneira ágil e eficaz. Detalhes específicos sobre o requisito de eficiência pode ser encontrado na Tabela 11.

<p style="text-align: center;">Tabela 11: Requisito Não Funcional de Eficiência.</p>

| Item   | Requisito não funcional                              |
|--------|------------------------------------------------------|
| RQNF05 | O sistema deve ser capaz de apresentar respostas em tempo real. |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Segurança
Nesta seção, são discutidos os requisitos não funcionais relacionados à segurança abrangente do sistema. Isso envolve a proteção da confidencialidade dos dados do usuário, a garantia da segurança geral dos dados e a preservação da integridade dos dados. Para obter informações mais detalhadas, consulte a Tabela 12.

<p style="text-align: center;">Tabela 12: Requisitos Não Funcionais de Segurança.</p>

| Item   | Requisito não funcional                                               |
|--------|-----------------------------------------------------------------------|
| RQNF06 | O sistema deve preservar a confidencialidade dos dados do usuário.      |
| RQNF07 | O sistema deve assegurar a segurança dos dados.                         |
| RQNF08 | O sistema deve proteger a integridade dos dados.                        |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

## Mínimo Produto Viável
Este tópico abrange os requisitos funcionais essenciais do mínimo produto viável (MVP), selecionados e definidos na dinâmica do sequenciador implementada durante o método *Lean Inception*. A Tabela 13 detalha essas funcionalidades, apresentando as histórias de usuário que compõem a estrutura do MVP.

<p style="text-align: center;">Tabela 13: MVP do produto.</p>

| Item | Descrição | Pontos |
|----------------------|-----------|--------|
| HU01 | Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 8 |
| HU02 | Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes. | 5 |
| HU03 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o responsável por uma inspeção. | 5 |
| HU04 | Eu, como um usuário, desejo ser informado de minhas credenciais de acesso ao criar uma inspeção na página inicial. | 3 |
| HU05 | Eu, como um usuário, desejo poder adicionar e gerenciar artefatos ao iniciar a criação de uma inspeção. | 3 |
| HU06 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o nome de uma inspeção. | 3 |
| HU07 | Eu, como um usuário, desejo poder salvar uma inspeção completa. | 5 |
| HU08 | Eu, como um usuário, desejo poder salvar uma inspeção incompleta. | 5 |
| HU09 | Eu, como um usuário, desejo poder visualizar o progresso de uma inspeção através do status de quantos itens já foram inspecionados. | 8 |
| HU10 | Eu, como um usuário, desejo poder imprimir os relatórios gerados. | 8 |
| HU11 | Eu, como um usuário, desejo poder anexar textos em um rastro de uma inspeção. | 3 |
| HU12 | Eu, como um usuário, desejo poder anexar links externos em um rastro de uma inspeção. | 3 |
| HU13 | Eu, como um usuário, desejo poder sair da aplicação. | 2 |
| HU14 | Eu, como um usuário, desejo poder visualizar uma inspeção ao finalizá-la. | 5 |
| HU15 | Eu, como um usuário, desejo poder submeter arquivos para cada um dos itens ao realizar uma inspeção. | 8 |
| HU16 | Eu, como um usuário, desejo poder marcar rastros existentes em arquivos submetidos durante uma inspeção. | 5 |
| HU17 | Eu, como um usuário, desejo poder limpar uma única marcação ou todas as marcações durante uma inspeção. | 3 |
| HU18 | Eu, como um usuário, desejo poder adicionar, visualizar e editar um link para a gravação de uma inspeção. | 3 |
| HU19 | Eu, como um usuário, desejo poder visualizar gráficos com a situação dos itens inspecionados. | 8 |
| HU20 | Eu, como um usuário, desejo poder exportar os dados obtidos em uma inspeção. | 13 |
| HU21 | Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção. | 8 |
| HU22 | Eu, como um usuário, desejo poder adicionar, visualizar e editar o e-mail do responsável por uma inspeção. | 3 |
| HU23 | Eu, como um sistema, desejo manter o registro da última data em que uma inspeção foi alterada. | 5 |
| HU24 | Eu, como um usuário, desejo poder excluir uma inspeção. | 5 |
| HU25 | Eu, como um usuário, desejo poder visualizar uma listagem de inspeções. | 3 |
| HU26 | Eu, como um usuário, desejo poder iniciar outro fluxo de criação de inspeção. | 2 |
| HU27 | Eu, como um usuário, desejo poder adicionar, visualizar e editar os participantes de uma inspeção. | 5 |
| HU42 | Eu, como um usuário, desejo poder exportar todos os itens e gráficos de uma inspeção em um arquivo só. | 3 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

 Na definição das funcionalidades do MVP, aspectos como o valor de negócio, o benefício para o usuário e o esforço necessário para o desenvolvimento pela equipe foram cuidadosamente considerados. É importante destacar que os épicos de criação personalizada de lista de verificação e gerência de lista de verificação não foram incorporados no MVP.

</div>

## Referências
 
 * COHN, M. Agile Estimating and Planning. Prentice Hall, 2005.
 * COHN, M. User Stories Applied. Addison-Wesley Professional, 2004.
 * SCHWABER, K.; SUTHERLAND, J. The Scrum Guide. Scrum.org, 2017. Disponível em: <https://www.scrumguides.org/scrum-guide.html>. Acesso em: 27 de Nov. de 2023.
 * SOMMERVILLE, I. Software Engineering. 9ª. ed. Pearson Education India, 2011.

