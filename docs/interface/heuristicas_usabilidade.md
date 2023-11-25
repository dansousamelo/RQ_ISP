<br/>

<div style="display: flex; justify-content: center; align-items:center;">
    <img src="https://dansousamelo.github.io/RQ_ISP/assets/H01.png" width="200" height="200">
</div>

<br/>
<p align="justify">O propósito deste documento é apresentar as heurísticas de Nielsen que serão incorporadas pelo sistema, fornecendo orientações e melhores práticas para a criação de interfaces e sistemas que promovam uma experiência do usuário aprimorada e eficaz dentro da plataforma RQ_ISP.</p>

## Histórico de versões

| Data | Autor | Versão | Alteração |   
| ---- | ------ | ------ | ------ |
| 23/09/2020 | Daniel Veras e Paulo Almeida | 1.0 | Criando documento de heurísticas de usabilidade |



## Visibilidade do estado do sistema

Manter os usuários informados sobre o estado do sistema em tempo real é crucial para que compreendam as consequências de suas ações.

Na Figura 1, foi introduzido um sistema de carregamento para botões que requerem tempo de processamento, proporcionando uma experiência mais fluida aos usuários. Além disso, na Figura 2, é possível observar o status das inspeções, fornecendo aos usuários informações pertinentes sobre o progresso desses processos. Essas adições aprimoram a usabilidade da aplicação, tornando-a mais eficaz e informativa para os usuários.

<br/>
<div align="center">
    <p>Figura 1: Botão de entrada com indicador de carregamento.</p>
    <img src="https://dansousamelo.github.io/RQ_ISP/N01CARREGAR.png" width="60%" height="60%">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>


<br/>
<div align="center">
    <p>Figura 2: Indicador de status de inspeção</p>
    <img width="30%" height="30%" src="https://dansousamelo.github.io/RQ_ISP/N01STATUS.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>


## Compatibilidade entre o sistema e o mundo real

A interface do sistema deve refletir o mundo real dos usuários, utilizando terminologia e conceitos familiares, priorizando o reconhecimento em vez da memorização. Na aplicação, a utilização de ícones desempenha um papel fundamental na representação de ações que reproduzem interações do mundo real.

Por exemplo, na Figura 3, encontramos o ícone de arraste, que proporciona aos usuários uma maneira intuitiva de interagir com elementos visuais. Além disso, na imagem 4, são apresentados ícones específicos que simplificam a criação de inspeções e o acesso às listas de inspeções, contribuindo para uma experiência de usuário mais fluida e coerente.

<br/>
<div align="center">
    <p>Figura 3: Indicador de status de inspeção</p>
    <img width="50%" height="50%" src="https://dansousamelo.github.io/RQ_ISP/N02ARRASTAR.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>


<br/>
<div align="center">
    <p>Figura 4: Ícones para criar e acessar listas de inspeção, respectivamente.</p>
    <img width="20%" height="20%" src="https://dansousamelo.github.io/RQ_ISP/N02ICONES.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>

## Controle e liberdade do usuário



Essa heurística enfatiza a importância de manter os usuários informados sobre o estado do sistema em tempo real, notificando-os sobre erros ou eventos relevantes, ao mesmo tempo que possibilita a livre navegação pelo sistema para proporcionar a sensação de controle. O uso de toasts e diálogos de erro contribui para manter os usuários informados sobre o estado do sistema e aprimora a usabilidade, permitindo que eles reconheçam e compreendam problemas rapidamente. A Figura 5 representa de forma eficaz essa ideia ao oferecer ao usuário a opção de retornar à página anterior, enquanto a Figura 6 mostra os toasts e a Figura 7 apresenta um diálogo de erro.


<br/>
<div align="center">
    <p>Figura 5: Detalhes de uma inspeção e da página atual do usuário.</p>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/N03VOLTAR.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>


<br/>
<div align="center">
    <p>Figura 6: Toasts de sucesso e erro, respectivamente.</p>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/TOASTS.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>

<br/>
<div align="center">
    <p>Figura 7: Diálogo de erro.</p>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/ERROMODAL.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>



## Consistência e Padrões

A aplicação consistente de padrões de design em toda a interface do sistema é recomendada para proporcionar uma compreensão rápida e precisa. O sistema adota uma abordagem abrangente para incorporar esses princípios, mantendo um layout uniforme em todas as páginas do aplicativo ou site. Isso significa que elementos como botões de ação e menus são dispostos de maneira consistente em todas as páginas, tornando a compreensão e a navegação mais acessíveis aos usuários. Além disso, a aplicação uniforme de cores, ícones e tipografia facilita a identificação rápida das funções dos elementos da interface.

Outro aspecto relevante é a adoção de convenções de interação amplamente reconhecidas, como gestos familiares e cliques padrão, aumentando a previsibilidade das ações dos usuários. Essa abordagem também se estende ao feedback consistente, com indicadores visuais e animações utilizados de maneira uniforme para comunicar mensagens de sucesso, erro ou carregamento em todo o aplicativo.

Além disso, a organização do conteúdo, a disposição lógica das informações e a consistência no uso do idioma são aspectos que enriquecem a experiência do usuário de maneira integrada.

## Prevenção de erros

Projetar interfaces à prova de erros, que ofereçam confirmações antes de ações irreversíveis ocorrerem, é enfatizado na concepção do sistema. Um exemplo concreto dessa abordagem pode ser observado na Figura 8, que representa um formulário elaborado. Este formulário inclui campos obrigatórios e campos opcionais, visando assegurar que os usuários possam interagir com o sistema de maneira eficaz, reduzindo ao máximo a possibilidade de erros durante o preenchimento.


<br/>
<div align="center">
    <p>Figura 8: Formulário para preencher informações de uma inspeção.</p>
    <img width="40%" height="40%" src="https://dansousamelo.github.io/RQ_ISP/N05OBRIGATORIO.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>

O sistema também permite que o usuário cancele uma ação, como mostrado na Figura 9.

<br/>
<div align="center">
    <p>Figura 9: Confirmar ação de deleção de uma inspeção.</p>
    <img width="60%" height="60%" src="https://dansousamelo.github.io/RQ_ISP/DELETARINSPECAO.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>

## Reconhecimento ao invés de memorização

Os sistemas devem ser projetados de forma que as informações necessárias estejam visíveis e disponíveis, em vez de exigir que os usuários memorizem informações. O sistema foi desenvolvido com o objetivo de fornecer aos usuários a capacidade de reconhecer ações e opções, em vez de exigir que eles memorizem informações específicas. Isso significa que os elementos da interface foram projetados de forma a serem intuitivos e facilmente compreensíveis. Por exemplo, ícones descritivos são usados para representar claramente a ação ou função que eles realizam, evitando a necessidade de memorização de seu significado.

Acrescentando a isso, a organização lógica de informações agrupa elementos relacionados e dispõe-os de maneira intuitiva, permitindo que os usuários encontrem facilmente o que estão procurando. Essas abordagens reduzem a carga cognitiva associada à memorização de procedimentos ou termos, possibilitando que os usuários naveguem e interajam de forma mais fluida e sem a necessidade de memorizar complexos conjuntos de regras ou comandos.

## Flexibilidade e eficiência de uso

A criação de sistemas eficazes tanto para usuários novatos quanto para experientes é incentivada. O sistema foi projetado com a flexibilidade e eficiência de uso em mente, oferecendo aos usuários a capacidade de interagir de maneira eficaz e personalizada. Foram incorporados atalhos de teclado que permitem a execução rápida de ações comuns, além da possibilidade de reordenar elementos na interface de acordo com as preferências individuais dos usuários. Essas funcionalidades agilizam a interação com o sistema, tornando-o mais adaptável às necessidades de cada usuário e proporcionando uma experiência de uso eficiente e personalizada.

## Estética e design minimalista

O sistema implementa uma abordagem de design minimalista que se reflete em sua interface. Isso se traduz em uma interface limpa e organizada, onde a simplicidade é a chave. Para alcançar esse objetivo, utiliza-se uma paleta de cores minimalista, com tons sutis e poucas variações, criando um visual elegante e agradável. A tipografia utilizada é clara e legível, proporcionando uma experiência de leitura agradável para os usuários. O espaçamento entre elementos é cuidadosamente ajustado, evitando qualquer sensação de aglomeração visual e tornando a interação mais agradável.

Outro aspecto importante desse design minimalista é a escrita de textos concisos e diretos, evitando o excesso de informações que possam sobrecarregar o usuário. O contraste de cores é usado de forma estratégica para destacar elementos importantes, direcionando a atenção do usuário para onde ela é necessária. Essa abordagem de design também se concentra na funcionalidade, priorizando a usabilidade sobre elementos decorativos ou desnecessários, garantindo que a experiência do usuário seja intuitiva e eficaz.

## Ajuda aos usuários a reconhecer, diagnosticar e recuperar erros

Os sistemas devem ser capazes de informar claramente aos usuários quando ocorrem erros e fornecer orientações para corrigi-los. O sistema contempla a ajuda aos usuários para reconhecer e diagnosticar erros por meio da implementação de mensagens de erro claras e descritivas. Essas mensagens são cuidadosamente elaboradas para explicar de maneira simples e direta qualquer problema que o usuário possa encontrar durante sua interação com o sistema. Ao apresentar mensagens de erro informativas, o sistema capacita os usuários a compreenderem a natureza do erro e, assim, tomar medidas apropriadas para resolvê-lo. Essa abordagem visa tornar a experiência do usuário mais transparente e facilitar a resolução de problemas, melhorando a usabilidade e a eficácia geral do sistema.

A Figura 10 ilustra um exemplo de mensagem informada ao usuário quando o mesmo coloca o código de acesso errado.

<br/>
<div align="center">
    <p>Figura 10: Formulário para preencher informações de uma inspeção.</p>
    <img width="50%" height="50%" src="https://dansousamelo.github.io/RQ_ISP/N09CODIGOINVALIDO.png">
    <p style="font-style: italic;">Fonte: Os próprios autores.</p>
</div>

## Ajuda e documentação

Os sistemas devem oferecer recursos de ajuda e documentação que sejam fáceis de encontrar e usar quando necessário. Embora a ferramenta não disponha de um manual, é possível esclarecer eventuais dúvidas sobre o seu funcionamento ou a pesquisa entrando em contato com os desenvolvedores por e-mail.


## Referências

* MACK, R.; NIELSEN, J. Métodos de Inspeção de Usabilidade. ACM SIGCHI Bulletin, v. 25, n. 1, p. 28-33, Janeiro de 1993. DOI: 10.1145/157203.157207.

* Norman, D. A., & Draper, S. W. (1986). User Centered System Design: New Perspectives on Human-computer Interaction. Lawrence Erlbaum Associates.