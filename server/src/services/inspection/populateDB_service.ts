import { Item } from "../../interfaces/types";

export function inspectionTemplates(
  inspection_type: string
) {
  let templateName: string;
  let templateDescription: string;
  let templateItems: Item[];

  if (inspection_type === "userStory") {
    templateName = inspection_type;
    templateDescription = inspection_type;
    templateItems = [
      {
        item_index: "1",
        description: "O documento está na última versão do template?",
        situation: null,
        observations: "",
      },
      {
        item_index: "2",
        description:
          "O nome do documento possui nomenclatura de acordo com padrão definido? (Numeração sequencial com 3 algarismos, Intuitivo, Verbo no infinitivo + Substantivo no singular) EU_000_NomeDaEstoria",
        situation: null,
        observations: "",
      },
      {
        item_index: "3",
        description:
          "A versão do documento foi incrementada e a descrição da elaboração ou alteração foi registrada no histórico de revisões do documento?",
        situation: null,
        observations: "",
      },
      {
        item_index: "4",
        description: "O documento possui cabeçalhos e rodapés atualizados?",
        situation: null,
        observations: "",
      },
      {
        item_index: "5",
        description:
          "No caso de artefato ainda não homologado pela área de negócio, está na versão 1.0?",
        situation: null,
        observations: "",
      },
      {
        item_index: "6",
        description:
          "A versão do documento é equivalente a versão e data do histórico?",
        situation: null,
        observations: "",
      },
      {
        item_index: "7",
        description:
          "O documento possui formatação geral seguindo o template? (Título, estilo, fontes e indentação)",
        situation: null,
        observations: "",
      },
      {
        item_index: "8",
        description: "O documento possui erros de pontuação ou gramática?",
        situation: null,
        observations: "",
      },
      {
        item_index: "9",
        description:
          "O documento está registrado no repositório na pasta seguindo a Diretriz de Qualidade de Projeto?",
        situation: null,
        observations: "",
      },
      {
        item_index: "10",
        description:
          "Todos os textos auxiliares (azul entre chaves “[]”) foram retirados?",
        situation: null,
        observations: "",
      },
      {
        item_index: "11",
        description: "Todos os textos de exemplo foram retirados?",
        situation: null,
        observations: "",
      },
      {
        item_index: "12",
        description:
          "Os itens que não foram utilizados no documento possuem o texto “Não se aplica”?",
        situation: null,
        observations: "",
      },
      {
        item_index: "13",
        description:
          "A descrição está escrita de forma clara, lógica e objetiva?",
        situation: null,
        observations: "",
      },
      {
        item_index: "14",
        description:
          "O objetivo foi escrito e descrito usando um determinado padrão durante todo o documento? (Editar, Alterar, Incluir, Criar, Limpar e Voltar)",
        situation: null,
        observations: "",
      },
      {
        item_index: "15",
        description:
          "Conforme está descrito é possível entender a importância da funcionalidade para o usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: "16",
        description:
          "Todos os perfis que interagem com o requisito foram especificados?",
        situation: null,
        observations: "",
      },
      {
        item_index: "17",
        description:
          "O fluxo de negócio está legível e foi definido com a participação da área de negócio?",
        situation: null,
        observations: "",
      },
      {
        item_index: "18",
        description: "Todas as atividades do fluxo possuem ligação?",
        situation: null,
        observations: "",
      },
      {
        item_index: "19",
        description: "O fluxo possui início e fim?",
        situation: null,
        observations: "",
      },
      {
        item_index: "20",
        description:
          "O protótipo está bem definido e a imagem em boa resolução?",
        situation: null,
        observations: "",
      },
      {
        item_index: "21",
        description: "O protótipo foi desenhado juntamente com o usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: "22",
        description: "Os campos obrigatórios estão identificados no protótipo?",
        situation: null,
        observations: "",
      },
      {
        item_index: "23",
        description:
          "O nome do campo na especificação está idêntico ao do protótipo?",
        situation: null,
        observations: "",
      },
      {
        item_index: "24",
        description:
          "Todos os itens obrigatórios e botões estão claramente identificados no protótipo (*) e descritos na lista de atributos?",
        situation: null,
        observations: "",
      },
      {
        item_index: "25",
        description:
          "O campo descrição está descrito de forma clara e objetiva para entendimento do campo?",
        situation: null,
        observations: "",
      },
      {
        item_index: "26",
        description:
          "Os campos editáveis estão identificados na lista de especificação do protótipo?",
        situation: null,
        observations: "",
      },
      {
        item_index: "27",
        description:
          "Os campos que possuem domínios fechados, esses domínios foram identificados?",
        situation: null,
        observations: "",
      },
      {
        item_index: "28",
        description:
          "Todos os itens que possuem máscara estão identificados e as máscaras dos campos foram definidas?",
        situation: null,
        observations: "",
      },
      {
        item_index: "29",
        description:
          "Foram especificados os comportamentos dos botões de ação: Salvar, Limpar e Voltar, por exemplo?",
        situation: null,
        observations: "",
      },
      {
        item_index: "30",
        description:
          '"Os elementos de tela (campos) estão definidos?\nExemplo: Há definição de Nome, Valores válidos, Tipo, Formato (máscaras, formatação), Restrições (obrigatoriedade, limites, etc)"',
        situation: null,
        observations: "",
      },
      {
        item_index: "31",
        description:
          "Os filtros ou condições para as listas apresentadas pelo Sistema ao usuário estão especificados no requisito?",
        situation: null,
        observations: "",
      },
      {
        item_index: "32",
        description:
          "As regras de interface estão claras e condizentes com os campos?",
        situation: null,
        observations: "",
      },
      {
        item_index: "33",
        description:
          "Os atributos identificados nas regras de interface estão preenchidos utilizando a tabela de legenda?",
        situation: null,
        observations: "",
      },
      {
        item_index: "34",
        description:
          "Foram relacionadas as estórias impactadas e/ou relacionadas com a estória que está a ser especificada?",
        situation: null,
        observations: "",
      },
      {
        item_index: "35",
        description: "Os perfis estão definidos para cada critério de aceite?",
        situation: null,
        observations: "",
      },
      {
        item_index: "36",
        description:
          "Foi criado um critério de aceite para cada funcionalidade e/ou ação dentro da estória de usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: "37",
        description:
          "Os critérios de aceite estão escritos de forma clara e simplificada para o entendimento do usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: "38",
        description:
          "Os critérios de aceite foram definidos em conjunto com o usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: "39",
        description:
          "O primeiro passo do fluxo descreve a necessidade do perfil ao acessar o cenário?",
        situation: null,
        observations: "",
      },
      {
        item_index: "40",
        description:
          "As referências às mensagens foram criadas para o documento de mensagem?",
        situation: null,
        observations: "",
      },
      {
        item_index: "41",
        description:
          "Os passos que possuem referência dentro do documento possuem referência cruzada para o item referenciado.",
        situation: null,
        observations: "",
      },
    ];
  } else if (inspection_type === "privacyRequirement") {
    templateName = inspection_type;
    templateDescription = inspection_type;
    templateItems = [
      {
        item_index: "1",
        description:
          "COLETAR e ARMAZENAR o consentimento por escrito ou por outro meio que demonstre a manifestação de vontade do titular, de forma livre, específica e com conhecimento, exceto quando a lei aplicável permitir o processamento de dados sem o consentimento.",
        situation: null,
        observations: "",
        category: "purpose",
      },
      {
        item_index: "2",
        description: "LIMITAR o uso de dados à finalidade da coleta a menos que uma finalidade seja explicitamente exigida por lei aplicável",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "3",
        description: "APAGAR os dados sempre que a finalidade do processamento de dados for alcançada e não houver requisitos legais para mantê-las",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "4",
        description: "PERMITIR a conservação dos dados pessoais após o término de seu tratamento para uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados ou para cumprimento de obrigação legal/regulatória pelo controlador",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "5",
        description: "FINALIZAR o tratamento de dados pessoais no fim do período de tratamento",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "6",
        description: "MANTER disponível em área pública os procedimentos necessários para revogação do consentimento",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "7",
        description: "INFORMAR que a portabilidade dos dados pessoais não inclui dados que já tenham sido anonimizados pelo controlador",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "8",
        description: "COLETAR somente dos dados pessoais estritamente necessários para a finalidade pretendida para o controlador fazer o tratamento de dados em seu legítimo interesse",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "9",
        description: "PERMITIR o tratamento de dados para o exercício regular de direitos em processo judicial, administrativo ou arbitral, esse último conforme legislação",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "10",
        description: "PERMITIR o controlador de dados fazer o tratamento de dados quando necessário para atender aos seus interesses legítimos, com exceção das situações em que prevalecerem direitos e liberdades fundamentais do titular exigindo a proteção dos dados pessoais",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "11",
        description: "PERMITIR o controlador de dados fazer o tratamento de dados pessoais para a proteção do crédito",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "12",
        description: "DISPENSAR a exigência de consentimento para os dados tornados manifestamente públicos pelo titular, resguardados os direitos do titular e os princípios de tratamento de dados",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "13",
        description: "OBTER consentimento específico para a comunicação ou compartilhamento dos dados pessoais com outros controladores ressalvadas as hipóteses de dispensa do consentimento legais",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "14",
        description: "PERMITIR ao controlador que seja feito o tratamento de dados para a finalidade de apoio e promoção a atividades",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "15",
        description: "PERMITIR o tratamento de dados quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual o titular faça parte, a seu pedido",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "16",
        description: "COLETAR consentimento específico concedido por pelo menos um dos pais ou pelo responsável legal para tratamento de dados pessoais de crianças",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "17",
        description: "COLETAR dados pessoais de crianças sem o consentimento quando a coleta for necessária para contatar os pais ou o responsável legal, utilizados uma única vez e sem armazenamento, ou para sua proteção, e em nenhum caso poderão ser repassados a terceiro sem o consentimento",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "18",
        description: "REALIZAR todos os esforços razoáveis para verificar que o consentimento de dados pessoais de crianças e adolescentes foi dado pelo responsável pela criança, consideradas as tecnologias disponíveis, sendo dever do controlador",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "19",
        description: "PERMITIR a conservação dos dados pessoais após o término de seu tratamento para estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "20",
        description: "TORNAR pública a dispensa de consentimento por parte dos órgãos e entidades públicas quando necessário o tratamento de dados pessoais sensíveis para execução de suas atribuições",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "21",
        description: "INFORMAR ao titular de dados que o direito de requisição de informações também poderá ser exercido perante os organismos de defesa do consumidor",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "22",
        description: "NOTIFICAR o titular de dados, em veículos de fácil acesso preferencialmente em seus sítios eletrônicos, que o tratamento de dados pessoais pelas pessoas jurídicas de direito público no exercício de suas competências são realizados fornecendo informações claras e atualizadas sobre a previsão legal, a finalidade, os procedimentos e as práticas utilizadas para a execução dessas atividades, para o atendimento de sua finalidade pública, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "23",
        description: "FORNECER por parte dos órgãos notariais e de registro, acesso aos dados por meio eletrônico para a administração pública, tendo em vista as finalidades públicas",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "24",
        description: "GARANTIR que o uso compartilhado de dados pessoais pelo Poder Público seja para atender a finalidades específicas de execução de políticas públicas e atribuição legal pelos órgãos e pelas entidades públicas, respeitados os princípios de proteção de dados pessoais",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "25",
        description: "PERMITIR por parte do poder público a transferência a entidades privadas dos dados pessoais constantes de bases de dados a que tenha acesso apenas em casos de execução descentralizada de atividade pública que exija a transferência, exclusivamente para esse fim específico e determinado, nos casos em que os dados forem acessíveis publicamente, quando houver previsão legal ou a transferência for respaldada em contratos, convênios ou instrumentos congêneres ou na hipótese de a transferência dos dados objetivar exclusivamente a prevenção de fraudes e irregularidades, ou proteger e resguardar a segurança e a integridade do titular dos dados, desde que vedado o tratamento para outras finalidades",
        situation: null,
        observations: "",
        category: "purpose"
      },
      {
        item_index: "26",
        description: "USAR ou oferecer como opções padrão, sempre que possível, interações e transações que não envolvam a identificação de titulares de dados, reduzam a observabilidade de seu comportamento e limitem a vinculação das informações coletadas",
        situation: null,
        observations: "",
        category: "adequacy"
      },
      {
        item_index: "27",
        description: "VEDAR o tratamento de dados mediante vício de consentimento",
        situation: null,
        observations: "",
        category: "adequacy"
      },
      {
        item_index: "28",
        description: "PERMITIR ao titular a qualquer momento e mediante requisição, a revogação do consentimento",
        situation: null,
        observations: "",
        category: "adequacy"
      },
      {
        item_index: "29",
        description: "PERMITIR que o controlador efetue o tratamento de dados para proteção do exercício regular de seus direitos ou prestação de serviços que o beneficiem, respeitados os direitos e liberdades fundamentais do titular",
        situation: null,
        observations: "",
        category: "adequacy"
      },
      {
        item_index: "30",
        description: "PERMITIR a conservação dos dados pessoais após o término de seu tratamento para estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais",
        situation: null,
        observations: "",
        category: "adequacy"
      },
      {
        item_index: "31",
        description: "PERMITIR o tratamento de dados pessoais sensíveis somente quando o titular ou seu responsável legal consentir, de forma específica e destacada, para finalidades específicas",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "32",
        description: "PERMITIR o tratamento de dados pessoais sensíveis sem fornecimento de consentimento do titular apenas quando indispensável para o cumprimento de obrigação legal ou regulatória pelo controlador",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "33",
        description: "PERMITIR o tratamento de dados pessoais mediante o consentimento expresso do titular de dados",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "34",
        description: "COMUNICAR o titular quando o tratamento de dados pessoais for condição para o fornecimento de produto ou de serviço ou para o exercício de direito",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "35",
        description: "PERMITIR o tratamento de dados pessoais sensíveis sem fornecimento de consentimento do titular, quando indispensável para o exercício regular de direitos, inclusive em contrato e em processo judicial, administrativo e arbitral e também quando indispensável para a garantia da prevenção à fraude e à segurança do titular, nos processos de identificação e autenticação de cadastro em sistemas eletrônicos",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "36",
        description: "PERMITIR o tratamento de dados pessoais sensíveis sem fornecimento de consentimento do titular, quando indispensável para a realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais sensíveis",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "37",
        description: "PERMITIR o tratamento de dados pessoais sensíveis sem fornecimento de consentimento do titular, quando indispensável para a proteção da vida ou da incolumidade física do titular ou de terceiro e tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "38",
        description: "PERMITIR a administração pública o tratamento de dados assim como seu compartilhamento quando necessários à execução de políticas públicas previstas em leis e regulamentos ou respaldadas em contratos, convênios ou instrumentos congêneres",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "39",
        description: "ASSEGURAR a adoção de um princípio de “necessidade de conhecimento”, ou seja, deve-se ter acesso apenas às informações que sejam necessárias para o desempenho de suas funções oficiais no âmbito do propósito legítimo do processamento de dados",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "40",
        description: "INFORMAR a autoridade nacional, por parte do agente de tratamento, quando da comunicação ou o uso compartilhado de dados pessoais de pessoa jurídica de direito público a pessoa de direito privado",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "41",
        description: "PERMITIR o tratamento de dados pessoais sensíveis sem fornecimento de consentimento do titular, quando indispensável para o tratamento compartilhado de dados necessários à execução de políticas públicas previstas em leis ou regulamentos por parte da administração pública",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "42",
        description: "PERMITIR a transferência internacional de dados pessoais somente nos casos em países ou organismos internacionais que proporcionem grau de proteção de dados pessoais adequado ao previsto no Brasil e quando o controlador oferecer e comprovar garantias de cumprimento dos princípios, dos direitos do titular e do regime de proteção de dados brasileiros a partir de contratos, normas corporativas globais, selos, certificados e códigos de conduta regularmente emitidos",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "43",
        description: "PERMITIR a transferência internacional de dados pessoais somente quando a transferência for necessária para a execução de política pública ou atribuição legal do serviço público, sendo dada publicidade da política",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "44",
        description: "PERMITIR a transferência internacional de dados pessoais somente quando o titular tiver fornecido o seu consentimento específico e em destaque para a transferência, com informação prévia sobre o caráter internacional da operação, distinguindo claramente esta de outras finalidades",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "45",
        description: "PERMITIR a transferência internacional de dados pessoais somente quando a transferência for necessária para a cooperação jurídica internacional entre órgãos públicos de inteligência, de investigação e de persecução, de acordo com os instrumentos de direito internacional",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "46",
        description: "PERMITIR a transferência internacional de dados pessoais somente quando a transferência for necessária para a proteção da vida ou da incolumidade física do titular ou de terceiro",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "47",
        description: "PERMITIR a transferência internacional de dados pessoais somente quando a autoridade nacional autorizar a transferência",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "48",
        description: "PERMITIR a transferência internacional de dados pessoais somente quando a transferência resultar em compromisso assumido em acordo de cooperação internacional",
        situation: null,
        observations: "",
        category: "needs"
      },
      {
        item_index: "49",
        description: "FORNECER aos titulares de dados a capacidade de acessar e revisar suas informações e obter cópia eletrônica integral de seus dados pessoais",
        situation: null,
        observations: "",
        category: "openAcess"
      },
      {
        item_index: "50",
        description: "PERMITIR ao titular dos dados solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses",
        situation: null,
        observations: "",
        category: "openAcess"
      },
      {
        item_index: "51",
        description: "GARANTIR que as informações processadas sejam precisas, completas e atualizadas (a menos que haja uma base legítima para manter dados desatualizados), adequados e relevantes para a finalidade de uso;",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "52",
        description: "PERMITIR que os titulares de dados contestem a precisão e integridade das informações e as alterem corrigindo ou removendo conforme apropriado e possível no contexto específico",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "53",
        description: "FORNECER qualquer alteração, correção ou remoção para os processadores de dados e terceiros a quem os dados foram divulgados, onde são conhecidos",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "54",
        description: "VERIFICAR, por meios apropriados, a validade e exatidão das reivindicações feitas pelo responsável pelas informações antes de fazer qualquer alteração nas informações (para garantir que as alterações sejam devidamente autorizadas), quando apropriado",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "55",
        description: "ESTABELECER procedimentos de coleta de dados para ajudar a garantir precisão e qualidade",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "56",
        description: "ESTABELECER mecanismos de controle para verificar periodicamente a precisão e a qualidade das informações coletadas e armazenadas",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "57",
        description: "ARMAZENAR os dados em formato interoperável e estruturado para o uso compartilhado, com vistas à execução de políticas públicas, à prestação de serviços públicos, à descentralização da atividade pública e à disseminação e ao acesso das informações pelo público em geral",
        situation: null,
        observations: "",
        category: "dataQuality"
      },
      {
        item_index: "58",
        description: "APRESENTAR as informações sobre o tratamento de dados pessoais de crianças e adolescentes de maneira simples, clara e acessível, consideradas as características físico-motoras, perceptivas, sensoriais, intelectuais e mentais do usuário, com uso de recursos audiovisuais quando adequado, de forma a proporcionar a informação necessária aos pais ou ao responsável legal e adequada ao entendimento da criança",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "59",
        description: "INFORMAR ao titular dos dados, antes de qualquer novo processamento, de forma explícita, o teor das alterações de finalidade específica do tratamento; forma e duração do tratamento, observados os segredos comercial e industrial; identificação do controlador; e informações de contato do controlador, podendo o titular, nos casos em que o seu consentimento é exigido, revogá-lo caso discorde da alteração",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "60",
        description: "PERMITIR e providenciar ao titular, por meio de declaração clara e completa, que indique a origem dos dados, a inexistência de registro, os critérios utilizados e a finalidade do tratamento, observados os segredos comercial e industrial, fornecida no prazo de até 15 dias, contado da data do requerimento do titular, a confirmação de existência ou o acesso aos dados pessoais e fornecer o acesso as informações e aos dados por meio eletrônico, seguro e idôneo para esse fim ou sob forma impressa, a critério do titular",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "61",
        description: "PERMITIR ao titular revogar a qualquer momento um consentimento mediante manifestação expressa por procedimento gratuito e facilitado, ratificados os tratamentos realizados sob amparo do consentimento anteriormente manifestado enquanto não houver requerimento de eliminação",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "62",
        description: "APRESENTAR a finalidade, a boa-fé e o interesse público que justificaram o tratamento de dados pessoais de acesso público",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "63",
        description: "PERMITIR que o requerimento de informações sobre seus dados seja atendido sem custos para o titular, nos prazos e nos termos previstos em regulamento",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "64",
        description: "ARMAZENAR os dados pessoais em formato que favoreça o exercício do direito de acesso por parte do titular de dados",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "65",
        description: "INFORMAR aos titulares de dados, antes de obter consentimento, sobre seus direitos e possibilitar o entendimento das especificidades exigidas para a finalidade especificada no consentimento",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "66",
        description: "USAR uma linguagem para esta especificação que seja clara e apropriadamente adaptada a circunstâncias",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "67",
        description: "FORNECER aos titulares de dados informações claras e facilmente acessíveis sobre as políticas do controlador, procedimentos e práticas com relação ao processamento de dados",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "68",
        description: "DIVULGAR as opções e os meios oferecidos pelo controlador aos titulares de dados com o objetivo de limitar o processamento e acessar, corrigir e remover suas informações",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "69",
        description: "PERMITIR que o titular de dados entenda os requisitos especificados de retenção e eliminação de dados",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "70",
        description: "INDICAR o encarregado pelo tratamento de dados pessoais",
        situation: null,
        observations: "",
        category: "transparency"
      },
      {
        item_index: "71",
        description: "IMPEDIR a obrigatoriedade de fornecimento de informações pessoais, além das estritamente necessárias à atividade, para a participação dos titulares de dados crianças e adolescentes em jogos, aplicações de internet ou outras atividades",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "72",
        description: "BLOQUEAR os dados pessoais a que se refere a infração até a sua regularização",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "73",
        description: "APAGAR os dados pessoais a que se refere a infração quando aplicável e legal",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "74",
        description: "IMPLEMENTAR as preferências do titular de dados conforme expresso em seu consentimento",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "75",
        description: "PERMITIR o tratamento de dados para a proteção da vida, da incolumidade física do titular ou de terceiro, para a tutela da saúde exclusivamente em procedimento realizado por profissionais de saúde ou por entidades sanitárias",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "76",
        description: "PERMITIR o tratamento de dados para estudos por órgãos de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "77",
        description: "GARANTIR que o órgão de pesquisa seja o responsável pela segurança da informação dos dados pessoais, não permitida, em circunstância alguma, a transferência dos dados a terceiro",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "78",
        description: "PROTEGER as informações sob sua autoridade com controles apropriados em nível operacional, funcional e estratégico para garantir a integridade, confidencialidade e disponibilidade das informações e protegê-las contra riscos como acesso não autorizado, destruição, uso, modificação, divulgação ou perda ao longo do todo o seu ciclo de vida",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "79",
        description: "ASSEGURAR esses controles em requisitos legais aplicáveis, padrões de segurança, resultados de avaliações sistemáticas de risco de segurança conforme descrito na ISO 31000 e os resultados de uma análise de custo/benefício",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "80",
        description: "IMPLEMENTAR controles na proporção da probabilidade e gravidade das consequências potenciais, a sensibilidade das informações, o número de titulares que podem ser afetados e o contexto em que são realizadas",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "81",
        description: "LIMITAR o acesso a informações aos indivíduos que precisam desse acesso para desempenhar suas funções e limitar o acesso desses indivíduos apenas às informações as quais eles precisam acessar para desempenhar suas funções",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "82",
        description: "RESOLVER riscos e vulnerabilidades que são descobertos por meio de avaliações de risco de privacidade e auditoria e processos",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "83",
        description: "SUBMETER os controles a revisão e reavaliação periódicas em um gerenciamento contínuo de riscos de segurança processo",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "84",
        description: "POSSUIR controles internos apropriados e mecanismos de supervisão independentes que assegurem a conformidade com a lei de privacidade relevante e com suas políticas e procedimentos de segurança, proteção de dados e privacidade",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "85",
        description: "DESENVOLVER e manter avaliações de risco de privacidade para avaliar se as iniciativas de entrega de programas e serviços envolvendo o processamento de dados estão em conformidade com os requisitos de proteção de dados e privacidade",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "86",
        description: "SELECIONAR processadores de dados que forneçam garantias suficientes em relação aos controles organizacionais, físicos e técnicos para o processamento de dados e garantir o cumprimento desses controles",
        situation: null,
        observations: "",
        category: "security"
      },
      {
        item_index: "87",
        description: "TORNAR o consentimento do titular nulo, nas hipóteses em que é requerido, caso as informações fornecidas ao titular tenham conteúdo enganoso ou abusivo ou não tenham sido apresentadas previamente com transparência, de forma clara e inequívoca",
        situation: null,
        observations: "",
        category: "prevention"
      },
      {
        item_index: "88",
        description: "GARANTIR a adoção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito por parte dos agentes de tratamento",
        situation: null,
        observations: "",
        category: "prevention"
      },
      {
        item_index: "89",
        description: "TORNAR o consentimento do titular nulo caso as informações fornecidas ao titular tenham conteúdo enganoso ou abusivo ou não tenham sido apresentadas previamente com transparência, de forma clara e inequívoca",
        situation: null,
        observations: "",
        category: "prevention"
      },
      {
        item_index: "90",
        description: "PROTEGER a divulgação de dados pessoais em resultados de pesquisas de saúde",
        situation: null,
        observations: "",
        category: "prevention"
      },
      {
        item_index: "91",
        description: "GARANTIR a adoção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito por parte dos agentes de tratamento",
        situation: null,
        observations: "",
        category: "prevention"
      },
      {
        item_index: "92",
        description: "PROTEGER para que os dados pessoais do titular não sejam utilizados em seu prejuízo",
        situation: null,
        observations: "",
        category: "nonDiscrimination"
      },
      {
        item_index: "93",
        description: "VEDAR às operadoras de planos privados de assistência à saúde o tratamento de dados de saúde para a prática de seleção de riscos na contratação de qualquer modalidade, assim como na contratação e exclusão de beneficiários",
        situation: null,
        observations: "",
        category: "nonDiscrimination"
      },
      {
        item_index: "94",
        description: "MANTER disponível em área pública a informação sobre os tipos de dados pessoais coletados dos titulares de dados que são crianças",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "95",
        description: "NOTIFICAR todas as partes interessadas de privacidade relevantes sobre violações de privacidade",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "96",
        description: "PERMITIR que o titular de dados lesado tenha acesso a sanções e/ou recursos apropriados e eficazes, como retificação, expurgo ou restituição se ocorrer uma violação de privacidade",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "97",
        description: "FINALIZAR o tratamento de dados pessoais quando houver violação da lei por determinação da autoridade nacional",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "98",
        description: "NOTIFICAR o titular de dados da impossibilidade de adoção de medida imediata por não ser agente de tratamento dos dados e indicar, sempre que possível, o agente",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "99",
        description: "NOTIFICAR o titular de dados quando da impossibilidade de adoção imediata em relação a sua requisição indicando as razões de fato ou de direito que impedem a adoção imediata da providência",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "100",
        description: "FORNECER ao titular de dados, a partir de solicitação, informações claras e adequadas a respeito dos critérios e dos procedimentos utilizados para decisões automatizadas, observados os segredos comercial e industrial",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "101",
        description: "APRESENTAR quando aplicável explicações suficientes para a necessidade de processar dados sensíveis",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "102",
        description: "MANTER disponível em área pública os procedimentos necessários para confirmação da existência de tratamento pelo titular e as formas para o seu acesso",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "103",
        description: "MANTER disponível em área pública os procedimentos necessários para correção de dados incompletos, inexatos ou desatualizados",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "104",
        description: "MANTER disponível em área pública os procedimentos necessários para anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "105",
        description: "MANTER disponível em área pública os procedimentos necessários para portabilidade dos dados a outro fornecedor de serviço/produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "106",
        description: "MANTER disponível em área pública os procedimentos necessários para eliminação dos dados pessoais tratados com o consentimento do titular",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "107",
        description: "MANTER disponível em área pública os procedimentos necessários para obtenção de informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "108",
        description: "MANTER disponível em área pública a informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "109",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição o acesso aos dados",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "110",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição a correção de dados incompletos, inexatos ou desatualizados",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "111",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "112",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição a portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "113",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição a eliminação dos dados pessoais tratados com o consentimento do titular, observadas as exceções previstas",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "114",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição a informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "115",
        description: "OBTER do controlador, em relação aos dados do titular por ele tratados, a qualquer momento e mediante requisição a informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "116",
        description: "ADOTAR medidas para garantir a transparência do tratamento de dados por parte do controlador",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "117",
        description: "APRESENTAR a ANPD, quando por ela solicitado, relatório de impacto à proteção de dados pessoais para o tratamento fundamentado em seu legítimo interesse, observados os segredos comercial e industrial",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "118",
        description: "ATENDER a realização de auditoria, por parte da autoridade nacional, para verificação de aspectos discriminatórios em tratamento automatizado de dados pessoais, em caso de não oferecimento das e informações dos critérios e procedimentos utilizados para decisões automatizadas, baseado na observância de segredo comercial e industrial",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "119",
        description: "GARANTIR a manutenção de registro das operações de tratamento de dados pessoais que realizarem, especialmente quando baseado no legítimo interesse, por parte do controlador e o operador",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "120",
        description: "COMUNICAR à autoridade nacional da ocorrência de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, por parte do controlador",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "121",
        description: "IMPLEMENTAR os requisitos de segurança, os padrões de boas práticas e de governança e as princípios gerais de tratamento de dados previstos e às demais normas regulamentares nos sistemas utilizados para o tratamento de dados pessoais",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "122",
        description: "PUBLICIZAR a infração após devidamente apurada e confirmada a sua ocorrência",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "123",
        description: "DOCUMENTAR e comunicar, conforme apropriado, todas as políticas, procedimentos e práticas relacionadas à privacidade",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "124",
        description: "ATRIBUIR a um indivíduo específico dentro da organização (que pode, por sua vez, delegar a outros na organização conforme apropriado) a tarefa de implementar as políticas, procedimentos e práticas relacionadas à privacidade",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "125",
        description: "FORNECER treinamento adequado para o pessoal do controlador de dados que terá acesso a informações",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "126",
        description: "ESTABELECER procedimentos internos eficientes de tratamento de reclamações e reparação para uso pelos titulares de dados",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "127",
        description: "PONDERAR os procedimentos de indenização para as situações em que seja difícil ou impossível repor a privacidade da pessoa singular como se nada tivesse acontecido",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "128",
        description: "VERIFICAR e demonstrar que o processamento atende aos requisitos de proteção de dados e proteção de privacidade, realizando auditorias periodicamente usando auditores internos ou auditores terceirizados confiáveis",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      },
      {
        item_index: "129",
        description: "GARANTIR que ao transferir os dados para terceiros, garantir que o terceiro destinatário seja obrigado a fornecer um nível equivalente de proteção de privacidade por meio de meios contratuais ou outros, como políticas internas obrigatórias (a lei aplicável pode conter requisitos adicionais em relação às transferências internacionais de dados)",
        situation: null,
        observations: "",
        category: "accountabilityAndLegalReporting"
      }
    ];
  } else {
    throw new Error("Tipo de inspeção inválido");
  }

  return { templateName, templateDescription, templateItems };
}
