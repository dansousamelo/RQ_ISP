<br/>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/H01.png" width="200" height="200" />
</div>

<br/>

<div align="justify">

O objetivo deste documento é introduzir diretrizes de usabilidade com foco nas heurísticas de Nielsen e no contraste de cores. Essas diretrizes, inspiradas nas recomendações de Nielsen, serão integradas ao sistema, oferecendo orientações e melhores práticas para o desenvolvimento de interfaces e sistemas que proporcionem uma experiência do usuário mais aprimorada e eficaz no contexto da plataforma RQ_ISP.

</div>

## Histórico de versões

| Data       | Autor                        | Versão | Alteração                                       |
| ---------- | ---------------------------- | ------ | ----------------------------------------------- |
| 23/09/2020 | Daniel Veras e Paulo Almeida | 1.0    | Criando documento de heurísticas de usabilidade |

## Heurísticas de Nielsen

<div align="justify">

As heurísticas de Nielsen referem-se a um conjunto de diretrizes e princípios de usabilidade criados por Jakob Nielsen, um renomado especialista em experiência do usuário. Essas heurísticas são um guia geral para avaliar a usabilidade de interfaces de usuário, ajudando a identificar problemas e áreas de melhoria em sistemas, aplicativos e sites. Elas fornecem critérios e princípios que os designers e desenvolvedores podem seguir para criar interfaces mais intuitivas e eficazes. As heurísticas de Nielsen abrangem diversos aspectos da usabilidade, incluindo a navegação, a clareza das informações, a consistência e a eficiência do sistema, entre outros. Portanto, são uma ferramenta valiosa para melhorar a experiência do usuário em produtos digitais

</div>

### Visibilidade do estado do sistema

<div align="justify">

&emsp;&emsp;Manter os usuários informados sobre o estado do sistema em tempo real é crucial para que compreendam as consequências de suas ações.

&emsp;&emsp;Na Figura 1, foi introduzido um sistema de carregamento para botões que requerem tempo de processamento, proporcionando uma experiência mais fluida aos usuários. Além disso, na Figura 2, é possível observar o status das inspeções, fornecendo aos usuários informações pertinentes sobre o progresso desses processos. Essas adições aprimoram a usabilidade da aplicação, tornando-a mais eficaz e informativa para os usuários.

</div>

<br/>
<div align="center">
    <figure>Figura 1: Botão de entrada com indicador de carregamento.</figure>
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/N01CARREGAR.png" width="60%" height="60%" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

<br/>
<div align="center">
    <figure>Figura 2: Indicador de status de inspeção</figure>
    <img width="30%" height="30%" src="https://dansousamelo.github.io/RQ_ISP/assets/N01STATUS.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

### Compatibilidade entre o sistema e o mundo real

<div align="justify">
A interface do sistema deve refletir o mundo real dos usuários, utilizando terminologia e conceitos familiares, priorizando o reconhecimento em vez da memorização. Na aplicação, a utilização de ícones desempenha um papel fundamental na representação de ações que reproduzem interações do mundo real.
A interface do sistema deve refletir o mundo real dos usuários, utilizando terminologia e conceitos familiares, priorizando o reconhecimento em vez da memorização. Na aplicação, a utilização de ícones desempenha um papel fundamental na representação de ações que reproduzem interações do mundo real.

Por exemplo, na Figura 3, encontramos o ícone de arraste, que proporciona aos usuários uma maneira intuitiva de interagir com elementos visuais. Além disso, na imagem 4, são apresentados ícones específicos que simplificam a criação de inspeções e o acesso às listas de inspeções, contribuindo para uma experiência de usuário mais fluida e coerente.
Por exemplo, na Figura 3, encontramos o ícone de arraste, que proporciona aos usuários uma maneira intuitiva de interagir com elementos visuais. Além disso, na imagem 4, são apresentados ícones específicos que simplificam a criação de inspeções e o acesso às listas de inspeções, contribuindo para uma experiência de usuário mais fluida e coerente.

</div>

<br/>
<div align="center">
    <figure>Figura 3: Indicador de status de inspeção</figure>
    <img width="50%" height="50%" src="https://dansousamelo.github.io/RQ_ISP/assets/N02ARRASTAR.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

<br/>
<div align="center">
    <figure>Figura 4: Ícones para criar e acessar listas de inspeção, respectivamente.</figure>
    <img width="20%" height="20%" src="https://dansousamelo.github.io/RQ_ISP/assets/N02ICONES.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

### Controle e liberdade do usuário

<div align="justify">

Essa heurística enfatiza a importância de manter os usuários informados sobre o estado do sistema em tempo real, notificando-os sobre erros ou eventos relevantes, ao mesmo tempo que possibilita a livre navegação pelo sistema para proporcionar a sensação de controle. O uso de toasts e diálogos de erro contribui para manter os usuários informados sobre o estado do sistema e aprimora a usabilidade, permitindo que eles reconheçam e compreendam problemas rapidamente. A Figura 5 representa de forma eficaz essa ideia ao oferecer ao usuário a opção de retornar à página anterior, enquanto a Figura 6 mostra os toasts e a Figura 7 apresenta um diálogo de erro.
Essa heurística enfatiza a importância de manter os usuários informados sobre o estado do sistema em tempo real, notificando-os sobre erros ou eventos relevantes, ao mesmo tempo que possibilita a livre navegação pelo sistema para proporcionar a sensação de controle. O uso de toasts e diálogos de erro contribui para manter os usuários informados sobre o estado do sistema e aprimora a usabilidade, permitindo que eles reconheçam e compreendam problemas rapidamente. A Figura 5 representa de forma eficaz essa ideia ao oferecer ao usuário a opção de retornar à página anterior, enquanto a Figura 6 mostra os toasts e a Figura 7 apresenta um diálogo de erro.

</div>

<br/>
<div align="center">
    <figure>Figura 5: Detalhes de uma inspeção e da página atual do usuário.</figure>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/assets/N03VOLTAR.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

<br/>
<div align="center">
    <figure>Figura 6: Toasts de sucesso e erro, respectivamente.</figure>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/assets/TOASTS.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

<br/>
<div align="center">
    <figure>Figura 7: Diálogo de erro.</figure>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/assets/ERROMODAL.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

### Consistência e Padrões

<div align="justify">
A aplicação consistente de padrões de design em toda a interface do sistema é recomendada para proporcionar uma compreensão rápida e precisa. O sistema adota uma abordagem abrangente para incorporar esses princípios, mantendo um layout uniforme em todas as páginas do aplicativo ou site. Isso significa que elementos como botões de ação e menus são dispostos de maneira consistente em todas as páginas, tornando a compreensão e a navegação mais acessíveis aos usuários. Além disso, a aplicação uniforme de cores, ícones e tipografia facilita a identificação rápida das funções dos elementos da interface.

Outro aspecto relevante é a adoção de convenções de interação amplamente reconhecidas, como gestos familiares e cliques padrão, aumentando a previsibilidade das ações dos usuários. Essa abordagem também se estende ao feedback consistente, com indicadores visuais e animações utilizados de maneira uniforme para comunicar mensagens de sucesso, erro ou carregamento em todo o aplicativo.

Além disso, a organização do conteúdo, a disposição lógica das informações e a consistência no uso do idioma são aspectos que enriquecem a experiência do usuário de maneira integrada.

</div>

### Prevenção de erros

<div align="justify">
Projetar interfaces à prova de erros, que ofereçam confirmações antes de ações irreversíveis ocorrerem, é enfatizado na concepção do sistema. Um exemplo concreto dessa abordagem pode ser observado na Figura 8, que representa um formulário elaborado. Este formulário inclui campos obrigatórios e campos opcionais, visando assegurar que os usuários possam interagir com o sistema de maneira eficaz, reduzindo ao máximo a possibilidade de erros durante o preenchimento.

</div>

<br/>
<div align="center">
    <figure>Figura 8: Formulário para preencher informações de uma inspeção.</figure>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/assets/N05OBRIGATORIO.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

<div align="justify">
&emsp;&emsp;O sistema também permite que o usuário cancele uma ação, como mostrado na Figura 9.
</div>

<br/>
<div align="center">
    <figure>Figura 9: Confirmar ação de deleção de uma inspeção.</figure>
    <img width="60%" height="60%" src="https://dansousamelo.github.io/RQ_ISP/assets/DELETARINSPECAO.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

### Reconhecimento ao invés de memorização

<div align="justify">
&emsp;&emsp;Os sistemas devem ser projetados de forma que as informações necessárias estejam visíveis e disponíveis, em vez de exigir que os usuários memorizem informações. O sistema foi desenvolvido com o objetivo de fornecer aos usuários a capacidade de reconhecer ações e opções, em vez de exigir que eles memorizem informações específicas. Isso significa que os elementos da interface foram projetados de forma a serem intuitivos e facilmente compreensíveis. Por exemplo, ícones descritivos são usados para representar claramente a ação ou função que eles realizam, evitando a necessidade de memorização de seu significado.

&emsp;&emsp;Acrescentando a isso, a organização lógica de informações agrupa elementos relacionados e dispõe-os de maneira intuitiva, permitindo que os usuários encontrem facilmente o que estão procurando. Essas abordagens reduzem a carga cognitiva associada à memorização de procedimentos ou termos, possibilitando que os usuários naveguem e interajam de forma mais fluida e sem a necessidade de memorizar complexos conjuntos de regras ou comandos.

</div>

### Flexibilidade e eficiência de uso

<div align="justify">
&emsp;&emsp;A criação de sistemas eficazes tanto para usuários novatos quanto para experientes é incentivada. O sistema foi projetado com a flexibilidade e eficiência de uso em mente, oferecendo aos usuários a capacidade de interagir de maneira eficaz e personalizada. Foram incorporados atalhos de teclado que permitem a execução rápida de ações comuns, além da possibilidade de reordenar elementos na interface de acordo com as preferências individuais dos usuários. Essas funcionalidades agilizam a interação com o sistema, tornando-o mais adaptável às necessidades de cada usuário e proporcionando uma experiência de uso eficiente e personalizada.
</div>

### Estética e design minimalista

<div align="justify">
&emsp;&emsp;O sistema implementa uma abordagem de design minimalista que se reflete em sua interface. Isso se traduz em uma interface limpa e organizada, onde a simplicidade é a chave. Para alcançar esse objetivo, utiliza-se uma paleta de cores minimalista, com tons sutis e poucas variações, criando um visual elegante e agradável. A tipografia utilizada é clara e legível, proporcionando uma experiência de leitura agradável para os usuários. O espaçamento entre elementos é cuidadosamente ajustado, evitando qualquer sensação de aglomeração visual e tornando a interação mais agradável.

&emsp;&emsp;Outro aspecto importante desse design minimalista é a escrita de textos concisos e diretos, evitando o excesso de informações que possam sobrecarregar o usuário. O contraste de cores é usado de forma estratégica para destacar elementos importantes, direcionando a atenção do usuário para onde ela é necessária. Essa abordagem de design também se concentra na funcionalidade, priorizando a usabilidade sobre elementos decorativos ou desnecessários, garantindo que a experiência do usuário seja intuitiva e eficaz.

</div>

### Ajuda aos usuários a reconhecer, diagnosticar e recuperar erros

<div align="justify">
&emsp;&emsp;Os sistemas devem ser capazes de informar claramente aos usuários quando ocorrem erros e fornecer orientações para corrigi-los. O sistema contempla a ajuda aos usuários para reconhecer e diagnosticar erros por meio da implementação de mensagens de erro claras e descritivas. Essas mensagens são cuidadosamente elaboradas para explicar de maneira simples e direta qualquer problema que o usuário possa encontrar durante sua interação com o sistema. Ao apresentar mensagens de erro informativas, o sistema capacita os usuários a compreenderem a natureza do erro e, assim, tomar medidas apropriadas para resolvê-lo. Essa abordagem visa tornar a experiência do usuário mais transparente e facilitar a resolução de problemas, melhorando a usabilidade e a eficácia geral do sistema.

&emsp;&emsp;A Figura 10 ilustra um exemplo de mensagem informada ao usuário quando o mesmo coloca o código de acesso errado.

</div>

<br/>
<div align="center">
    <figure>Figura 10: Formulário para preencher informações de uma inspeção.</figure>
    <img width="50%" height="50%" src="https://dansousamelo.github.io/RQ_ISP/assets/N09CODIGOINVALIDO.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

### Ajuda e documentação

<div align="justify">
&emsp;&emsp;Os sistemas devem oferecer recursos de ajuda e documentação que sejam fáceis de encontrar e usar quando necessário. Embora a ferramenta não disponha de um manual, é possível esclarecer eventuais dúvidas sobre o funcionamento do sistema por meio desta documentação ou entrando em contato com os desenvolvedores por e-mail.
</div>

## Cores

<div align="justify">

A definição de cores em sistemas é uma etapa crucial em diversas áreas, que vai desde o design gráfico até a computação gráfica e o design de produtos. Essa definição possibilita especificar e comunicar de maneira precisa as características cromáticas, desempenhando um papel fundamental em aplicações gráficas. Além disso, enfatiza-se a importância de um sistema de cores bem definido para garantir a fidelidade na reprodução de cores em diferentes dispositivos e mídias. Dessa forma, a definição de cores em sistemas desempenha um papel essencial na manutenção da consistência e na garantia da precisão da representação cromática em diversas aplicações.

</div>

<br/>
<div align="center">
    <figure>Figura 11: Cores do sistema.</figure>
    <img width="50%" height="50%" src="https://dansousamelo.github.io/RQ_ISP/assets/COLORS.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

### Contraste

<div align="justify">

A acessibilidade na construção de software desempenha um papel crucial na garantia de que os aplicativos e sistemas digitais sejam acessíveis a todos os usuários, independentemente de suas capacidades individuais. A consideração da acessibilidade desde as fases iniciais do desenvolvimento de software é fundamental para a criação de produtos tecnológicos inclusivos, implicando projetar interfaces de usuário compatíveis com tecnologias assistivas e que sigam diretrizes de acessibilidade, como as estabelecidas no conjunto de normas Web Content Accessibility Guidelines (WCAG).

O valor de contraste é um conceito fundamental em áreas como design gráfico e arquitetura, sendo definido como a diferença perceptível entre os elementos visuais presentes em uma composição, abrangendo aspectos como cores, formas, tamanhos e texturas. Ele desempenha um papel crucial na comunicação visual, direcionando a atenção do espectador, estabelecendo hierarquias de informações e transmitindo emoções. Quando se deseja chamar a atenção de forma impactante, o contraste é a ferramenta mais eficaz, criando destaque e interesse visual. Arnheim também destacou a importância do contraste ao afirmar que ele capacita os designers a tornar elementos visuais distintos, conferindo dinamismo à composição e reforçando sua eficácia comunicativa.

O contraste das cores pode ser definido de acordo com o WebAIM, uma ferramenta útil para verificar o contraste de cores. A Figura 12 ilustra claramente o contraste entre o plano de fundo e os elementos superpostos sobre ele.

</div>

<br/>
<div align="center">
    <figure>Figura 12: Contraste entre o plano de fundo e os elementos superpostos sobre ele..</figure>
    <img width="50%" height="50%" src="https://dansousamelo.github.io/RQ_ISP/assets/CONTRASTE.png" />
    <figure style="font-style: italic;">Fonte: Os próprios autores.</figure>
</div>

## Referências

 * MACK, R.; NIELSEN, J. Métodos de Inspeção de Usabilidade. ACM SIGCHI Bulletin, v. 25, n. 1, p. 28-33, Janeiro de 1993. DOI: 10.1145/157203.157207.
 * Norman, D. A., & Draper, S. W. (1986). User Centered System Design: New Perspectives on Human-computer Interaction. Lawrence Erlbaum Associates.
 * WADDELL, C. et al. Constructing Accessible Web Sites. Apress, 2003.
