<br/>

<div style="display: flex; flex-direction: column; justify-content: center; align-items:center;">
    <img src="../assets/backlog/BACKLOG-ICON.png" width="200" height="200" />
</div>

<br/>
<p align="flex-direction: column; justify">Neste documento, são delineados os passos envolvidos na elaboração do <i>Product Backlog</i>, destacando cada fase do processo e documentando os artefatos gerados ao longo do percurso.</p>

## Histórico de versões

| Data | Autor | Versão | Alteração |   
| ---- | ------ | ------ | ------ |
| 27/11/2023 | Daniel Veras e Paulo Almeida | 1.0 | Criando documento do Product Backlog |

## Introdução
<div align="justify">

&emsp;&emsp; O *Product Backlog*, ou *Backlog* do produto, é um conceito fundamental na metodologia ágil, especialmente no framework *Scrum*. Trata-se de uma lista dinâmica e prioritizada de funcionalidades, melhorias e requisitos que compõem o produto a ser desenvolvido. Os itens no *Product Backlog* podem variar em termos de complexidade, esforço necessário para implementação e valor para o usuário final. Eles são frequentemente descritos em termos de histórias de usuário, que são pequenas narrativas centradas no usuário que descrevem uma funcionalidade desejada (Schwaber; Sutherland, 2017).

&emsp;&emsp; O <i>Backlog</i> do produto, deste projeto, foi construído combinando os requisitos, funcionais e não funcionais, coletados em cada etapa do processo de elaboração do *Lean Inception*. Os requisitos funcionais são aqueles que delineiam as necessidades, características e funcionalidades essenciais do produto de software, já os requisitos não funcionais focam nas qualidades e restrições que o produto deve cumprir, abrangendo aspectos como desempenho, segurança e usabilidade (Sommerville, 2011.). 

&emsp;&emsp; As histórias de usuários são agrupadas e organizadas de acordo com seus épicos correspondentes, proporcionando uma estrutura que visa simplificar a gestão de requisitos em uma escala mais abrangente (Cohn, 2004). Os épicos estabelecidos nesta fase são: "Navegação Inicial", "Gerência de Inspeção de Artefatos", "Inspeção de Artefatos", "Rastreabilidade de Itens de uma Inspeção", "Análise de Resultados", "Criação Personalizada de Lista de Verificação", "Gerência de Criação de Lista de Verificação". Cada épico será explicado individulamente nas Seções a seguir.

&emsp;&emsp; E por fim, para calcular a pontuação de cada história, foi utilizada a sequência de Fibonacci. Este método reconhece a importância de atribuir valores que representem com precisão a complexidade relativa de cada tarefa. A sequência de Fibonacci, conhecida por seu crescimento exponencial, foi usada para criar um sistema que efetivamente abrange as variações de esforço e complexidade. As pontuações, que variam de 0 a 13, foram organizados de maneira a facilitar a priorização de histórias, otimizar o uso de recursos e tornar o desenvolvimento o mais eficiente possível (Conh, 2005). 

</div>

## Requisitos Funcionais
<div align="justify">

&emsp;&emsp; Neste tópico, apresentam-se as histórias de usuários organizadas de acordo com seus respectivos épicos e derivam dos requisitos funcionais coletados durante a fase de coleta e refinamento dos requisitos. Cada um destes épicos, juntamente com suas histórias de usuários correspondentes, é descrito em detalhes nas subseções seguintes.

</div>

### Navegação Inicial
<div align="justify">

&emsp;&emsp; No épico de navegação inicial estão todas as histórias de usuário relacionadas ao acesso inicial e à organização de inspeções na página inicial. Estas histórias abordam desde o início do processo de criação de uma inspeção até o acesso e a gestão das informações de credenciais. A Tabela 1 apresenta as histórias de usuário e suas respectivas pontuações do épico Navegação Inicial.

</div>

<figure style="text-align: center;">Tabela 1: Histórias usuário relacionadas ao Épico de Navegação Inicial.</figure>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU01 | Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 5 |
| HU02 | Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes. | 8 |
| HU03 | Eu, como usuário, gostaria de ser informado das minhas credenciais de acesso ao criar uma inspeção na página inicial, para garantir que tenha as informações necessárias para continuar. | 3 |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Gerência de Inspeção de Artefatos
<div align="justify">

&emsp;&emsp; O épico de gerência de inspeção de artefatos concentra-se no controle e supervisão eficazes das inspeções. Aqui, as histórias de usuário abrangem um leque de funcionalidades, desde a visualização até a edição e exclusão de inspeções, passando pela administração dos participantes e liderança das inspeções. As especificidades dessas histórias, juntamente com suas pontuações, são apresentadas na Tabela 2, dedicada a este épico.

</div>

<p style="text-align: center;">Tabela 2: Histórias usuário relacionadas ao Épico de Gerência de Inspeção de Artefatos.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU04 | Eu, como usuário, gostaria de visualizar uma lista de inspeções, para acompanhar as inspeções em andamento. | 3 |
| HU05 | Eu, como usuário, gostaria de iniciar outro fluxo de criação de inspeção, para criar novas inspeções quando necessário. | 3 |
| HU06 | Eu, como usuário, gostaria de adicionar, visualizar e editar o nome de uma inspeção, para personalizar as informações da inspeção. | 2 |
| HU07 | Eu, como usuário, gostaria de adicionar, visualizar e editar os participantes de uma inspeção, para gerenciar quem está envolvido na inspeção. | 2 |
| HU08 | Eu, como usuário, gostaria de excluir uma inspeção, para remover inspeções que não são mais necessárias. | 2 |
| HU09 | Eu, como usuário, gostaria de adicionar, visualizar e editar o responsável por uma inspeção, para atribuir responsabilidades claras. | 2 |
| HU10 | Eu, como usuário, gostaria de adicionar, visualizar e editar o contato do responsável por uma inspeção, para ter informações de contato relevantes. | 2 |
| HU11 | Eu, como usuário do sistema, gostaria que o sistema registrasse a data da última modificação em uma inspeção, permitindo-me identificar facilmente quando ocorreram as alterações. | 3 |
| HU12 | Eu, como usuário, quero ter a capacidade de adicionar, visualizar e editar um link para a gravação de uma inspeção, para que eu possa gerenciar facilmente as gravações associadas a cada inspeção. | 3 |
| HU13 | Eu, como usuário, gostaria de buscar inspeções específicas para encontrar rapidamente a informação que preciso. | 5 |
| HU14 | Eu, como usuário, gostaria de adicionar, visualizar e editar cronogramas de inspeção para gerenciar melhor minhas atividades de inspeção. | 2 |
| HU15 | Eu, como usuário, gostaria de filtrar a listagem de inspeções exibidas para encontrar facilmente as inspeções que me interessam. | 5 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Inspeção de Artefatos
<div align="justify">

&emsp;&emsp; Dedicado ao núcleo do processo de inspeção, o épico de inspeção de artefatos trata das operações essenciais para a execução das inspeções. Este segmento inclui histórias de usuário que cobrem desde o salvamento de inspeções completas ou parciais até o monitoramento do progresso das inspeções, incluindo a seleção de modelos para as listas de verificação. A Tabela 3 fornece um detalhamento completo destas histórias e suas respectivas pontuações.

</div>

<p style="text-align: center;">Tabela 3: Histórias usuário relacionadas ao Épico de Inspeção de Artefatos.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU16 | Eu, como usuário, gostaria de poder salvar uma inspeção completa, para registrar todas as informações relevantes após a conclusão da inspeção. | 5 |
| HU17 | Eu, como usuário, gostaria de poder salvar uma inspeção incompleta, para retomá-la posteriormente. | 3 |
| HU18 | Eu, como usuário, gostaria de visualizar o progresso de uma inspeção através do status de quantos itens já foram inspecionados, para acompanhar o andamento da inspeção. | 3 |
| HU19 | Eu, como usuário, gostaria de poder cancelar uma inspeção, caso ela não possa ser concluída ou não seja mais necessária. | 2 |
| HU20 | Eu, como usuário, gostaria de poder refazer uma inspeção, se for necessário revisá-la. | 3 |
| HU21 | Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção. | 2 |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Rastreabilidade de Itens de uma Inspeção
<div align="justify">

&emsp;&emsp; O foco do épico de rastreabilidade de Itens de uma Inspeção está na gestão detalhada dos artefatos envolvidos nas inspeções. As histórias de usuário deste épico lidam com a inclusão e manipulação de artefatos, desde a adição inicial até a marcação detalhada e ajustes necessários. Informações detalhadas sobre estas histórias e suas avaliações podem ser encontradas na Tabela 4.

</div>

<p style="text-align: center;">Tabela 5: Histórias usuário relacionadas ao Épico de Rastreabilidade de Itens de uma Inspeção.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU22 | Eu, como usuário, gostaria de adicionar e gerenciar artefatos ao iniciar a criação de uma inspeção, para incluir os itens a serem inspecionados. | 5 |
| HU23 | Eu, como usuário, gostaria de poder submeter arquivos para cada um dos itens ao realizar uma inspeção, para registrar informações relevantes. | 5 |
| HU24 | Eu, como usuário, gostaria de poder anexar links externos, imagens e texto a um item de inspeção, para fornecer informações adicionais. | 5 |
| HU25 | Eu, como usuário, gostaria de poder marcar requisitos existentes em arquivos submetidos, para identificar informações importantes. | 13 |
| HU26 | Eu, como usuário, gostaria de poder limpar uma única marcação ou todas as marcações, para fazer correções quando necessário. | 3 |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Análise de Resultados
<div align="justify">

&emsp;&emsp; O épico de análise de resultados é orientado para a avaliação e a disseminação dos dados coletados nas inspeções. As histórias de usuário aqui descrevem desde a visualização de dados em formatos gráficos até a exportação de dados e arquivos para uso externo, garantindo uma compreensão ampla dos resultados das inspeções. Estas histórias e suas pontuações são detalhadas na Tabela 6.

</div>

<p style="text-align: center;">Tabela 6: Histórias usuário relacionadas ao Épico de Análise de Resultados.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU27 | Eu, como usuário, gostaria de poder visualizar gráficos com a situação dos itens inspecionados, para obter *insights* visuais sobre os resultados da inspeção. | 8 |
| HU28 | Eu, como usuário, gostaria de poder exportar os arquivos submetidos com as marcações realizadas, para ter um registro completo das informações. | 8 |
| HU29 | Eu, como usuário, gostaria de poder exportar os dados obtidos em uma inspeção, para utilizar esses dados em outros contextos ou sistemas. | 13 |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Criação Personalizada de Lista de Verificação
<div align="justify">

&emsp;&emsp; O épico de Criação Personalizada de lista de verificação foca na habilidade do usuário de moldar listas de verificação de acordo com suas necessidades específicas no contexto de inspeção. Este conjunto de histórias de usuário explora desde a criação de listas customizadas até a implementação de medidas de segurança, como códigos de acesso e IDs. Além disso, inclui a funcionalidade de visualizar listas pré-existentes para inspiração e prevenção de redundâncias. Detalhes sobre estas histórias e suas pontuações são encontrados na Tabela 7.

</div>

<p style="text-align: center;">Tabela 7: Histórias usuário relacionadas ao Épico de Criação Personalizada de Lista de Verificação.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU30 | Eu, como usuário, gostaria de criar listas de verificação personalizadas para atender às minhas necessidades específicas de inspeção. | 13 |
| HU31 | Eu, como usuário, gostaria que o sistema gerasse um código de acesso ao criar uma lista de verificação personalizada para garantir a segurança e o acesso restrito às informações. | 2 |
| HU32 | Eu, como usuário, gostaria que o sistema me perguntasse se possuo um ID e senha para atribuir à lista de verificação durante a criação, para manter a segurança dos meus dados. | 3 |
| HU33 | Eu, como usuário, gostaria de visualizar listas de verificação existentes ao criar uma nova, para evitar duplicatas e inspirar-me em listas anteriores. | 5 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Gerência de Lista de Verificação
<div align="justify">

&emsp;&emsp; O épico de gerência de lista de verificação aborda o gerenciamento efetivo das listas de verificação após sua criação. As histórias de usuário aqui permitem ao usuário editar, exportar, excluir e duplicar listas de verificação, além de fornecerem uma visão geral de todas as listas criadas. Esta seção também destaca a funcionalidade de filtragem das listas, facilitando a localização rápida com base em títulos ou datas. A Tabela 8 apresenta um resumo dessas histórias de usuário, juntamente com suas respectivas pontuações.

</div>

<p style="text-align: center;">Tabela 7: Histórias usuário relacionadas ao Épico de Criação Personalizada de Lista de Verificação.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU34 | Eu, como usuário, gostaria de editar uma lista de verificação para fazer ajustes conforme necessário. | 3 |
| HU35 | Eu, como usuário, gostaria de exportar listas de verificação para usá-las em outros contextos ou compartilhá-las com colegas. | 3 |
| HU36 | Eu, como usuário, gostaria de excluir listas de verificação que não são mais necessárias para manter minha organização limpa e atualizada. | 2 |
| HU37 | Eu, como usuário, gostaria de visualizar uma listagem de todas as minhas listas de verificação para ter uma visão geral das minhas atividades de inspeção. | 3 |
| HU38 | Eu, como usuário, gostaria de duplicar listas de verificação para reutilizar estruturas eficazes em diferentes contextos. | 3 |
| HU39 | Eu, como usuário, gostaria de filtrar a listagem de listas de verificação por título ou data para localizar rapidamente as listas desejadas. | 3 |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

## Requisitos não funcionais
<div align="justify">

&emsp;&emsp; Neste tópico, são apresentados os requisitos não funcionais, os quais foram organizados em 5 categorias distintas: usabilidade, portabilidade, confiabilidade, eficiência e segurança. Os detalhes específicos de cada categoria serão abordados a seguir.

</div>

### Usabilidade
<div align="justify">

&emsp;&emsp; Neste tópico são apresentados requisitos não funcionais relacionados à usabilidade da interface de autenticação. A ênfase está na criação de uma experiência do usuário intuitiva, em conformidade com as diretrizes de design. A Tabela 8 fornece detalhes sobre os requisitos não funcionais específicos para usabilidade.

</div>

<p style="text-align: center;">Tabela 8: Requisitos Não Funcional de Usabilidade.</p>

| Item   | Requisito não funcional                                                                                         |
|--------|-----------------------------------------------------------------------------------------------------------------|
| RQNF01 | A interface de autenticação deve ser projetada de forma intuitiva, seguindo as diretrizes de design de experiência do usuário. |
| RQNF02 | Os avisos sobre o uso de *cookies* devem ser apresentados de forma clara e fácil de entender para os usuários.        |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Portabilidade
<div align="justify">

&emsp;&emsp; Este tópico aborda um requisito não funcional de portabilidade do sistema. O objetivo é garantir que o sistema seja acessível de maneira consistente em uma variedade de navegadores populares. Consulte a Tabela 9 para obter detalhes sobre o requisito relacionado à portabilidade.

</div>

<p style="text-align: center;">Tabela 9: Requisito Não Funcional de Portabilidade.</p>

| Item   | Requisito não funcional                                                                                             |
|--------|---------------------------------------------------------------------------------------------------------------------|
| RQNF03 | O sistema de autenticação deve ser compatível com os principais navegadores da web, como Chrome, Firefox, Safari e Edge. |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Confiabilidade
<div align="justify">

&emsp;&emsp; Nesta seção, é apresentado um requisito não funcional relacionado à confiabilidade. É crucial que os cookies mantenham uma vida útil adequada e não expirem prematuramente, a menos que o usuário escolha sair ou retirar seu consentimento. A Tabela 10 apresenta uma visão geral do requisito não funcional que garante a confiabilidade.

</div>

<p style="text-align: center;">Tabela 10: Requisito Não Funcional de Confiabilidade.</p>

| Item   | Requisito não funcional                                                                                                           |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| RQNF04 | Os *cookies* devem ter uma vida útil adequada e não expirar de forma prematura, a menos que o usuário opte por sair ou revogar seu consentimento. |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Eficiência
<div align="justify">

&emsp;&emsp; Aqui, é explorado um requisito não funcional relacionado à eficiência do sistema. Isso implica que o sistema deve ser capaz de fornecer respostas em tempo real de maneira ágil e eficaz. Detalhes específicos sobre o requisito de eficiência pode ser encontrado na Tabela 11.

</div>

<p style="text-align: center;">Tabela 11: Requisito Não Funcional de Eficiência.</p>

| Item   | Requisito não funcional                              |
|--------|------------------------------------------------------|
| RQNF05 | O sistema deve ser capaz de apresentar respostas em tempo real. |

<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

### Segurança
<div align="justify">

&emsp;&emsp; Nesta seção, são discutidos os requisitos não funcionais relacionados à segurança abrangente do sistema. Isso envolve a proteção da confidencialidade dos dados do usuário, a garantia da segurança geral dos dados e a preservação da integridade dos dados. Para obter informações mais detalhadas, consulte a Tabela 12.

</div>

<p style="text-align: center;">Tabela 12: Requisitos Não Funcionais de Segurança.</p>

| Item   | Requisito não funcional                                               |
|--------|-----------------------------------------------------------------------|
| RQNF06 | O sistema deve preservar a confidencialidade dos dados do usuário.      |
| RQNF07 | O sistema deve assegurar a segurança dos dados.                         |
| RQNF08 | O sistema deve proteger a integridade dos dados.                        |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

## Mínimo Produto Viável
<div align="justify">

&emsp;&emsp; Este tópico abrange os requisitos funcionais essenciais do mínimo produto viável (MVP), selecionados e definidos na dinâmica do sequenciador implementada durante o método *Lean Inception*. A Tabela 13 detalha essas funcionalidades, apresentando as histórias de usuário que compõem a estrutura do MVP.

</div>

<p style="text-align: center;">Tabela 13: MVP do produto.</p>

| Item | História de Usuário | Pontuação |
|------|----------------------|-----------|
| HU01 | Eu, como usuário, gostaria de poder iniciar o fluxo de criação de uma inspeção na página inicial, para facilitar o início do processo de inspeção. | 5 |
| HU02 | Eu, como usuário, gostaria de poder acessar minha lista de inspeções na página inicial, para ter fácil acesso às inspeções existentes. | 8 |
| HU03 | Eu, como usuário, gostaria de ser informado das minhas credenciais de acesso ao criar uma inspeção na página inicial, para garantir que tenha as informações necessárias para continuar. | 3 |
| HU04 | Eu, como usuário, gostaria de visualizar uma lista de inspeções, para acompanhar as inspeções em andamento. | 3 |
| HU05 | Eu, como usuário, gostaria de iniciar outro fluxo de criação de inspeção, para criar novas inspeções quando necessário. | 3 |
| HU06 | Eu, como usuário, gostaria de adicionar, visualizar e editar o nome de uma inspeção, para personalizar as informações da inspeção. | 2 |
| HU07 | Eu, como usuário, gostaria de adicionar, visualizar e editar os participantes de uma inspeção, para gerenciar quem está envolvido na inspeção. | 2 |
| HU08 | Eu, como usuário, gostaria de excluir uma inspeção, para remover inspeções que não são mais necessárias. | 2 |
| HU09 | Eu, como usuário, gostaria de adicionar, visualizar e editar o responsável por uma inspeção, para atribuir responsabilidades claras. | 2 |
| HU10 | Eu, como usuário, gostaria de adicionar, visualizar e editar o contato do responsável por uma inspeção, para ter informações de contato relevantes. | 2 |
| HU11 | Eu, como usuário do sistema, gostaria que o sistema registrasse a data da última modificação em uma inspeção, permitindo-me identificar facilmente quando ocorreram as alterações. | 3 |
| HU12 | Eu, como usuário, quero ter a capacidade de adicionar, visualizar e editar um link para a gravação de uma inspeção, para que eu possa gerenciar facilmente as gravações associadas a cada inspeção. | 3 |
| HU16 | Eu, como usuário, gostaria de poder salvar uma inspeção completa, para registrar todas as informações relevantes após a conclusão da inspeção. | 5 |
| HU17 | Eu, como usuário, gostaria de poder salvar uma inspeção incompleta, para retomá-la posteriormente. | 3 |
| HU18 | Eu, como usuário, gostaria de visualizar o progresso de uma inspeção através do status de quantos itens já foram inspecionados, para acompanhar o andamento da inspeção. | 3 |
| HU19 | Eu, como usuário, gostaria de poder cancelar uma inspeção, caso ela não possa ser concluída ou não seja mais necessária. | 2 |
| HU20 | Eu, como usuário, gostaria de poder refazer uma inspeção, se for necessário revisá-la. | 3 |
| HU21 | Eu, como usuário, gostaria de escolher um modelo de lista de verificação ao criar uma inspeção, para orientar o processo de inspeção. | 2 |
| HU22 | Eu, como usuário, gostaria de adicionar e gerenciar artefatos ao iniciar a criação de uma inspeção, para incluir os itens a serem inspecionados. | 5 |
| HU23 | Eu, como usuário, gostaria de poder submeter arquivos para cada um dos itens ao realizar uma inspeção, para registrar informações relevantes. | 5 |
| HU24 | Eu, como usuário, gostaria de poder anexar links externos, imagens e texto a um item de inspeção, para fornecer informações adicionais. | 5 |
| HU25 | Eu, como usuário, gostaria de poder marcar requisitos existentes em arquivos submetidos, para identificar informações importantes. | 13 |
| HU26 | Eu, como usuário, gostaria de poder limpar uma única marcação ou todas as marcações, para fazer correções quando necessário. | 3 |
| HU27 | Eu, como usuário, gostaria de visualizar gráficos com a situação dos itens inspecionados, para obter *insights* visuais sobre os resultados da inspeção. | 8 |
| HU29 | Eu, como usuário, gostaria de poder exportar os dados obtidos em uma inspeção, para utilizar esses dados em outros contextos ou sistemas. | 13 |


<p style="font-style: italic; text-align: center;">Fonte: Os próprios autores.</p>

<div align="justify">

&emsp;&emsp; Na definição das funcionalidades do MVP, aspectos como o valor de negócio, o benefício para o usuário e o esforço necessário para o desenvolvimento pela equipe foram cuidadosamente considerados. É importante destacar que os épicos de criação personalizada de lista de verificação e gerência de lista de verificação não foram incorporados no MVP.

</div>

## Referências
 
 * COHN, M. Agile Estimating and Planning. Prentice Hall, 2005.
 * COHN, M. User Stories Applied. Addison-Wesley Professional, 2004.
 * SCHWABER, K.; SUTHERLAND, J. The Scrum Guide. Scrum.org, 2017. Disponível em: <https://www.scrumguides.org/scrum-guide.html>. Acesso em: 27 de Nov. de 2023.
 * SOMMERVILLE, I. Software Engineering. 9ª. ed. Pearson Education India, 2011.

