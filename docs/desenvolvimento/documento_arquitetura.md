<br/>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/ARQ01.png" width="200" height="200" />
</div>

<br/>
A seguir, apresenta-se uma especificação clara e concisa dos tópicos relacionados ao Documento de Arquitetura.

## Histórico de versões

| Data | Autor | Versão | Alteração |   
| ---- | ------ | ------ | ------ |
| 25/11/2023 | Daniel Veras e Paulo Almeida | 1.0 | Criando documento de arquitetura |
| 25/11/2023 | Daniel Veras e Paulo Almeida | 1.0.1 | Adição da ORM Prisma |
| 25/11/2023 | Daniel Veras e Paulo Almeida | 1.1.0 | Adicionando DER |

## Introdução
Este documento de arquitetura tem como objetivo principal fornecer uma visão abrangente e detalhada da arquitetura de *software* aplicada ao sistema, com foco especial nas decisões arquiteturais essenciais para orientar o desenvolvimento da aplicação *RQ\_ISP*. Ele serve como alicerce para uma compreensão completa da arquitetura do sistema e das escolhas críticas realizadas durante o ciclo de desenvolvimento. 

O documento abrange a arquitetura técnica do sistema *RQ\_ISP*, uma plataforma *web* projetada para criar inspeções por meio de modelos predefinidos e, posteriormente, gerar estatísticas e relatórios com base nas inspeções realizadas. É de suma importância que os desenvolvedores estejam alinhados com as diretrizes estabelecidas neste contexto, garantindo assim a conformidade com o padrão arquitetônico proposto. Neste documento, serão explorados os principais elementos e componentes que compõem essa arquitetura de *software*, com o objetivo de proporcionar uma análise mais aprofundada do sistema *RQ\_ISP*.

## Representação da arquitetura
A arquitetura adotada no projeto é a abordagem monolítica, caracterizada pela integração de todos os componentes do sistema em uma única unidade. Em um sistema monolítico, todos os módulos e funcionalidades compartilham a mesma base de código e recursos, simplificando a manutenção, mas potencialmente limitando a escalabilidade e a flexibilidade. A comunicação entre o *frontend* e o *backend* ocorre internamente na mesma aplicação, com o servidor processando requisições do usuário e enviando respostas para atualizar a interface do usuário.

## Metas e restrições de arquitetura

### Metas de arquitetura
As metas estabelecidas para a arquitetura do projeto têm um papel central no direcionamento do desenvolvimento da aplicação, alinhando-o com as necessidades e expectativas do cliente. Uma das metas prioritárias é a eficiência e o desempenho da aplicação. Garantir que a aplicação responda de forma ágil às solicitações dos usuários é fundamental para proporcionar uma experiência de usuário positiva e manter a competitividade no mercado.

Além disso, a escalabilidade é uma meta de extrema importância. A aplicação deve ser projetada de maneira a acomodar um aumento significativo na carga de trabalho, assegurando que, à medida que a base de usuários e a quantidade de dados cresçam, a aplicação possa expandir de maneira correspondente, evitando problemas de desempenho.

Outra meta crítica é a segurança dos dados. O projeto inclui a implementação de medidas robustas de segurança, como autenticação, autorização e criptografia, com o objetivo de proteger os dados do usuário. Isso não apenas preserva a privacidade do usuário, mas também garante o cumprimento das regulamentações de privacidade.

Por fim, a manutenibilidade e extensibilidade são metas essenciais para garantir a longevidade e a evolução da aplicação. O código será projetado de forma modular, tornando mais fácil a manutenção e permitindo a adição de novos recursos no futuro.

### Restrições de arquitetura
Um aspecto crucial no projeto é a consideração das restrições de arquitetura. Já foram definidas tecnologias específicas para serem utilizadas, incluindo *TypeScript* e *React* no *frontend*, *Styled Components* para estilização, *Context API* para gerenciamento de estado, além de *Express.js* e *Node.js* no *backend*, e *PostgreSQL* como sistema de gerenciamento de banco de dados. Estas escolhas são baseadas na eficiência, facilidade de desenvolvimento e segurança, representando uma restrição tecnológica importante.

Outra restrição significativa é a conformidade rigorosa com padrões de segurança. O projeto exige a implementação de medidas robustas de segurança, incluindo autenticação, autorização e criptografia, seguindo as melhores práticas do setor. Isso é crucial para assegurar a segurança dos dados dos usuários.

A compatibilidade com diferentes navegadores também é uma consideração importante, garantindo que a aplicação seja acessível e opere uniformemente nos navegadores mais atualizados. Isso é essencial para atingir uma ampla base de usuários e oferecer uma experiência consistente.

## Visão lógica
Este tópico enfatiza a importância da estruturação do sistema em pacotes e camadas como um elemento fundamental para simplificar o desenvolvimento, manutenção e compreensão abrangente do *software*. Essa organização proporciona uma clara divisão de responsabilidades, estabelecendo uma base sólida para a construção de um sistema eficiente e escalável. Além disso, essa estrutura assegura a existência de um fluxo de dados definido, promovendo uma interação harmoniosa entre os diversos componentes do sistema.

### Componentes principais
A visão lógica da arquitetura técnica do sistema é estruturada em termos de pacotes e camadas, que desempenham papéis cruciais na organização e na compreensão da implementação do *software*. Essa estruturação é essencial para o desenvolvimento, manutenção e compreensão do sistema como um todo.

#### Pacotes
Os pacotes são unidades de implementação que agrupam classes e interfaces relacionadas em conjunto, desempenhando um papel essencial na organização do código e na criação de uma estrutura hierárquica. Essa organização lógica dos pacotes, além de simplificar a localização e compreensão do código pelos desenvolvedores, também promove o encapsulamento, restringindo o escopo das classes e interfaces. Dessa forma, as classes pertencentes a um pacote podem interagir entre si, enquanto aquelas externas ao pacote têm seu acesso limitado.

Além disso, os pacotes proporcionam benefícios adicionais, como o gerenciamento eficiente de dependências dentro do sistema. Através de uma estrutura de pacotes bem definida, é possível controlar as relações de dependência entre diferentes partes do sistema. Essa abordagem contribui significativamente para a redução do acoplamento excessivo, resultando em uma manutenção mais fácil e na facilitação da evolução contínua do sistema.

#### Diagrama de pacotes do *frontend*
O diagrama de pacotes do *frontend* representa a organização modular dos componentes visuais e lógicos que compõem a interface do usuário em aplicações web ou móveis. Ele descreve a estrutura das pastas que abrigam recursos estáticos, *scripts*, estilos e componentes reutilizáveis, tornando a arquitetura do lado do cliente mais compreensível. Este diagrama fornece orientações aos desenvolvedores sobre a localização e a interação com os diversos elementos do código *frontend*.

<br/>
<div align="center">
    <p>Figura 1: Diagrama de pacotes do <i>frontend</i>.</figure>
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/FR01.png" width="80%" height="80%" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>
<br/>

A seguir, são apresentados os pacotes definidos na Figura acima, acompanhados de uma breve explicação:

- **client**: Esta é a pasta raiz que contém todos os arquivos relacionados ao lado do cliente de uma aplicação.
- **public**: Normalmente contém arquivos estáticos que são acessíveis ao público, como ícones, arquivos *HTML* estáticos, manifestos, etc.
- **node\_modules**: Esta pasta contém todos os pacotes do *Node.js* que são instalados através do *NPM* (Node Package Manager). É onde as dependências do projeto são armazenadas.
- **src**: A pasta de código-fonte onde o código-fonte principal do projeto é mantido.
- **@types**: Usado para armazenar declarações de tipo *TypeScript*.
- **pages**: Contém os componentes de página da aplicação.
- **context**: Frequentemente usado em projetos React para armazenar a lógica de gerenciamento de estado global com o uso de *Context API*.
- **components**: Contém os componentes reutilizáveis da aplicação que podem ser usados em várias páginas ou partes da aplicação.
- **styles**: Armazena arquivos relacionados a estilos globais, como *CSS* ou outros pré-processadores de estilos.
- **lib**: Normalmente contém bibliotecas auxiliares ou código compartilhado que pode ser usado em diferentes partes da aplicação.
- **utils**: Diretório para funções utilitárias, *scripts* e ajudantes que podem ser usados em todo o projeto para realizar tarefas comuns.
- **assets**: Armazena recursos estáticos, como imagens, vídeos e áudios, por exemplo.
- **img**: Uma subpasta dentro de *assets* especificamente para armazenar imagens.

#### Diagrama de pacotes do *backend*
O diagrama de pacotes do *backend* é uma representação visual da estrutura organizacional dos componentes lógicos que compõem a parte de servidor de um *software*, mostrando como eles estão agrupados em pacotes ou módulos para facilitar o desenvolvimento e a compreensão da arquitetura do *backend*.



<br/>
<div align="center">
    <p>Figura 2: Diagrama de pacotes do <i>backend</i>.</figure>
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/BC01.png" width="80%" height="80%" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>
<br/>

A seguir, são apresentados os pacotes definidos na Figura acima, juntamente com uma breve explicação de cada um:

- **server**: Pasta raiz para todos os arquivos relacionados ao servidor da aplicação.
- **prisma**: É uma pasta que normalmente contém configurações para o Prisma, um *ORM* (Object-Relational Mapper) que facilita o acesso ao banco de dados em aplicações *Node.js*.
- **node\_modules**: Esta pasta contém os pacotes do *Node.js* instalados por meio do *NPM* (Node Package Manager), que são as dependências necessárias para o projeto.
- **src**: Pasta de código-fonte onde reside o código principal do *backend*.
- **controllers**: Contém arquivos que lidam com a lógica de entrada de requisições *HTTP*, chamando os serviços necessários e devolvendo respostas ao cliente.
- **services**: Esta pasta geralmente contém a lógica de negócios da aplicação. Serviços são chamados pelos controladores para executar operações específicas, como interações com o banco de dados ou processamento de dados.
- **db**: Provavelmente contém arquivos relacionados ao banco de dados, como modelos de dados, migrações, e *scripts* de inicialização do banco de dados.
- **interfaces**: Em *TypeScript*, por exemplo, esta pasta pode conter definições de interfaces para tipagem de dados e contratos dentro do código.
- **utils**: Pasta destinada a funções de utilidade, que podem ser utilizadas em várias partes do projeto para realizar tarefas comuns e auxiliar no desenvolvimento.

### Camadas
Além dos pacotes, o sistema é estruturado em camadas, que representam níveis lógicos de abstração e responsabilidade. As camadas são uma forma de organizar a aplicação em componentes que se comunicam entre si de maneira ordenada. No contexto do sistema, as camadas principais incluem:

- **Camada de Apresentação (_Frontend_)**: Esta camada é responsável pela interface do usuário, construída com tecnologias como _TypeScript_ e _React_. Ela lida com a apresentação de dados ao usuário e captura interações do usuário. É a parte visível da aplicação.
- **Camada de Apresentação (_Backend_)**: Esta camada é construída com _Express.js_ e _Node.js_. Ela processa as solicitações recebidas do _frontend_, lida com a lógica de negócios e acessa os dados no banco de dados. Também é responsável pela segurança e autenticação.
- **Camada de Dados (Banco de Dados)**: O _PostgreSQL_ é utilizado nesta camada para armazenar e recuperar dados persistentes. Ele fornece um mecanismo robusto para gerenciar informações e permite que o sistema mantenha um estado consistente.

### Interação entre camadas
A interação entre as camadas ocorre principalmente por meio de chamadas _HTTP RESTful_. O _frontend_ envia solicitações para o _backend_ para acessar ou atualizar os dados, e o _backend_ interage com o banco de dados conforme necessário. Isso cria um fluxo de dados bem definido e facilita a manutenção e expansão do sistema.

Em resumo, a arquitetura técnica do sistema é projetada com uma estrutura de pacotes e camadas que organiza e facilita o desenvolvimento, manutenção e compreensão do _software_ como um todo. Ela permite a clara separação de responsabilidades e fornece uma base sólida para a construção de um sistema eficiente e escalável.

### Fluxo de dados
O fluxo de dados na aplicação é um processo essencial que assegura a interação harmoniosa entre o usuário, o _frontend_, o _backend_ e o banco de dados. O processo se inicia com a interação do usuário na interface do usuário no _frontend_, onde ele realiza solicitações relacionadas à visualização, criação ou extração de dados estatísticos de inspeções. Essas ações desencadeiam o envio de solicitações _HTTP_ do _frontend_ para o _backend_ correspondente, com base na ação específica realizada pelo usuário.

No _backend_, as solicitações recebidas são processadas com o intuito de obter e manipular os dados necessários. Essa etapa inclui a interação com o banco de dados _PostgreSQL_, onde as informações são armazenadas e recuperadas de maneira eficiente. O _backend_ atua como um intermediário confiável entre o _frontend_ e o banco de dados, garantindo que as solicitações sejam tratadas de forma apropriada.

Uma vez que o _backend_ conclui o processamento das solicitações, ele retorna as respostas geradas ao _frontend_. Essas respostas podem incluir dados estatísticos, informações de inspeções ou qualquer outra informação relevante solicitada pelo usuário. O _frontend_, então, utiliza essas respostas para exibir as informações de forma adequada ao usuário, proporcionando uma experiência interativa e informativa.

## Visão de implementação

A visão de implementação é uma parte fundamental do documento de arquitetura, pois descreve os detalhes técnicos da construção da aplicação, incluindo as tecnologias, padrões de codificação e práticas recomendadas que serão seguidos durante o desenvolvimento. Essa visão fornece uma orientação clara para a equipe de desenvolvimento e garante a consistência e a qualidade do código.

Nesta seção, destaca-se as principais tecnologias e _frameworks_ que serão utilizados durante a implementação da aplicação.

### Frontend

- **_TypeScript_**: A linguagem _TypeScript_ será a base para o desenvolvimento do _frontend_, oferecendo tipagem estática para melhorar a segurança e a manutenção do código.
- **_React_**: O _React_ continuará sendo o _framework_ utilizado para a construção da interface do usuário, aproveitando seus componentes reutilizáveis e a facilidade de desenvolvimento de interfaces interativas.
- **_Styled Components_**: A estilização será implementada utilizando a biblioteca _Styled Components_. Isso permite que os estilos sejam definidos diretamente nos componentes _React_, mantendo a modularidade e a organização do código.
- **_Context API_**: A _Context API_ do _React_ será usada para o gerenciamento de estado da aplicação. Ela permitirá que dados e estados globais sejam compartilhados entre componentes de forma eficiente, tornando a gestão de informações mais simples.

### Backend

- **_Express.js_**: O _framework_ _Express.js_ será a base do _backend_, proporcionando uma estrutura sólida para a criação de _APIs RESTful_.
- **_Node.js_**: O ambiente de execução _Node.js_ será utilizado para a execução de código do lado do servidor, garantindo eficiência no processamento de solicitações.
- **_TypeScript_**: Assim como no _frontend_, o _TypeScript_ será adotado no _backend_ para melhorar a qualidade do código e reduzir erros.
- **Segurança (Autenticação e Autorização)**: Implementaremos um sistema de autenticação seguro para proteger o acesso não autorizado aos recursos da aplicação. A autorização será baseada em papéis de usuário para garantir que apenas usuários autorizados acessem determinadas funcionalidades.

### Banco de dados

- **_PostgreSQL_**: O sistema de gerenciamento de banco de dados _PostgreSQL_ será utilizado para a persistência de dados. Ele oferece robustez, confiabilidade e recursos avançados de consulta.
- **_Prisma_**: O mapeamento objeto-relacional _(ORM)_ _Prisma_ será utilizada como camada de abstração para as operações no banco de dados. Ademais, será utilizada por fornecer uma camada de tipagem estática e também por facilitar a criação de migrações no banco.
- **_Diagrama Entidade Relacionamento_**: Um Diagrama Entidade-Relacionamento _(DER)_ é uma representação visual que descreve a estrutura de um banco de dados de forma conceitual, mostrando as entidades (objetos) e seus relacionamentos dentro do sistema. A Figura abaixo retrata o Diagrama Entidade Relacionamento elaborado. 

<br/>
<div align="center">
    <p>Figura 3: Diagrama Entidade Relacionamento do sistema.</figure>
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/DER_TCC.png" width="100%" height="100%" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>
<br/>


## Padrões de codificação
A consistência no código desempenha um papel essencial na facilitação da colaboração entre desenvolvedores e na manutenção do sistema ao longo do tempo. Para garantir essa consistência, serão aplicados os seguintes padrões de codificação:

Em relação à nomenclatura, seguirão as convenções estabelecidas para variáveis, funções e classes. Essa prática visa assegurar que o código seja legível e compreensível, contribuindo para a compreensão e manutenção eficiente do sistema.

Adicionalmente, serão implementados padrões de organização do código. Isso envolverá a estruturação do código em módulos e pacotes de acordo com a arquitetura definida, tornando mais simples a localização de funcionalidades específicas. Essa organização aprimorará a gestão do código, facilitando modificações e adições futuras.

Em síntese, a manutenção da consistência no código é um princípio fundamental que guiará o desenvolvimento. O cumprimento das convenções de nomenclatura e a organização padronizada do código contribuirão para a robustez, colaboração eficaz e sustentabilidade do _software_ ao longo do tempo, beneficiando tanto os atuais membros da equipe quanto aqueles que trabalharão com o código no futuro.

## Controle de versão
Para manter um controle eficaz sobre o desenvolvimento do código e assegurar a sua qualidade, serão implementadas práticas específicas.

A primeira dessas práticas é a adoção do sistema de controle de versão _Git_. O _Git_ desempenhará um papel crucial ao possibilitar o rastreamento preciso de todas as mudanças realizadas no código. Essa funcionalidade é fundamental para uma colaboração eficaz entre os membros da equipe de desenvolvimento. Além disso, o _Git_ contribui significativamente para a gestão de versões e o acompanhamento das modificações, o que, por sua vez, garante a estabilidade e a integridade do código-fonte ao longo do tempo.

Por meio do uso do _Git_, todas as alterações feitas no código serão cuidadosamente documentadas, permitindo uma identificação fácil do autor de cada modificação e do momento em que ela ocorreu. Esse nível de transparência aprimora o processo de desenvolvimento, simplifica a resolução de conflitos e oferece a flexibilidade necessária para reverter alterações, caso seja necessário.

## Referências

 * PostgreSQL. O que é o PostgreSQL. Disponível em: http://pgdocptbr.sourceforge.net/pg82/intro-whatis.html. Acesso em: 22 nov. 2023

 * RICHARDSON, Chris. Microservices: Patterns and Applications. [S.l.], 2020. Disponível em: https://microservices.io/. Acesso em: 25 nov. 2023.


 * DATE, C. J. An Introduction to Database Systems. Pearson, 2004

 * ELMASRI, Ramez; NAVATHE, Shamkant B. Fundamentals of Database Systems. Pearson, 2015

 * KRUCHTEN, Philippe. Architectural Blueprints—The “4+1” View Model of Software Architecture. IEEE Software, 1995.

 * HEJLSBERG, Anders. TypeScript: JavaScript Development at Application Scale. 2012.

 * VAZQUEZ, Abel. React JS: Library for Building User Interfaces. Web Development, 2018.
 
 * FOWLER, Martin. Code Standardization. Addison-Wesley, 2018.
  
 * MEAD, Andrew. Express in Action. Manning Publications, 2020.
  
 * SCHMITT, Nikolas. Prisma: Next Generation ORM. Journal of Database Management, 2021.
  
 * MADISON, Kyle. Styled Components in React. O'Reilly Media, 2019.
  
 * LARMAN, Craig. Applying UML and Patterns. Prentice Hall, 2004.

 * MARTIN, Robert C. Clean Architecture: A Craftsman's Guide to Software Structure and Design. Prentice Hall, 2017.
 
 * Prisma. Is Prisma an ORM? | What is an ORM? Disponível em: https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/is-prisma-an-orm. Acesso em: 23 nov. de  2023







