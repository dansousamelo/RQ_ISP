import { Item } from "../../interfaces/types";

export function inspectionTemplates(
  inspection_type: string,
  inspection_id: string
) {
  let templateName: string;
  let templateDescription: string;
  let templateItems: Item[];

  if (inspection_type === "userStory") {
    templateName = inspection_type;
    templateDescription = inspection_type;
    templateItems = [
      {
        item_index: 1,
        description: "O documento está na última versão do template?",
        situation: null,
        observations: "",
      },
      {
        item_index: 2,
        description:
          "O nome do documento possui nomenclatura de acordo com padrão definido? (Numeração sequencial com 3 algarismos, Intuitivo, Verbo no infinitivo + Substantivo no singular) EU_000_NomeDaEstoria",
        situation: null,
        observations: "",
      },
      {
        item_index: 3,
        description:
          "A versão do documento foi incrementada e a descrição da elaboração ou alteração foi registrada no histórico de revisões do documento?",
        situation: null,
        observations: "",
      },
      {
        item_index: 4,
        description: "O documento possui cabeçalhos e rodapés atualizados?",
        situation: null,
        observations: "",
      },
      {
        item_index: 5,
        description:
          "No caso de artefato ainda não homologado pela área de negócio, está na versão 1.0?",
        situation: null,
        observations: "",
      },
      {
        item_index: 6,
        description:
          "A versão do documento é equivalente a versão e data do histórico?",
        situation: null,
        observations: "",
      },
      {
        item_index: 7,
        description:
          "O documento possui formatação geral seguindo o template? (Título, estilo, fontes e indentação)",
        situation: null,
        observations: "",
      },
      {
        item_index: 8,
        description: "O documento possui erros de pontuação ou gramática?",
        situation: null,
        observations: "",
      },
      {
        item_index: 9,
        description:
          "O documento está registrado no repositório na pasta seguindo a Diretriz de Qualidade de Projeto?",
        situation: null,
        observations: "",
      },
      {
        item_index: 10,
        description:
          "Todos os textos auxiliares (azul entre chaves “[]”) foram retirados?",
        situation: null,
        observations: "",
      },
      {
        item_index: 11,
        description: "Todos os textos de exemplo foram retirados?",
        situation: null,
        observations: "",
      },
      {
        item_index: 12,
        description:
          "Os itens que não foram utilizados no documento possuem o texto “Não se aplica”?",
        situation: null,
        observations: "",
      },
      {
        item_index: 13,
        description:
          "A descrição está escrita de forma clara, lógica e objetiva?",
        situation: null,
        observations: "",
      },
      {
        item_index: 14,
        description:
          "O objetivo foi escrito e descrito usando um determinado padrão durante todo o documento? (Editar, Alterar, Incluir, Criar, Limpar e Voltar)",
        situation: null,
        observations: "",
      },
      {
        item_index: 15,
        description:
          "Conforme está descrito é possível entender a importância da funcionalidade para o usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: 16,
        description:
          "Todos os perfis que interagem com o requisito foram especificados?",
        situation: null,
        observations: "",
      },
      {
        item_index: 17,
        description:
          "O fluxo de negócio está legível e foi definido com a participação da área de negócio?",
        situation: null,
        observations: "",
      },
      {
        item_index: 18,
        description: "Todas as atividades do fluxo possuem ligação?",
        situation: null,
        observations: "",
      },
      {
        item_index: 19,
        description: "O fluxo possui início e fim?",
        situation: null,
        observations: "",
      },
      {
        item_index: 20,
        description:
          "O protótipo está bem definido e a imagem em boa resolução?",
        situation: null,
        observations: "",
      },
      {
        item_index: 21,
        description: "O protótipo foi desenhado juntamente com o usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: 22,
        description: "Os campos obrigatórios estão identificados no protótipo?",
        situation: null,
        observations: "",
      },
      {
        item_index: 23,
        description:
          "O nome do campo na especificação está idêntico ao do protótipo?",
        situation: null,
        observations: "",
      },
      {
        item_index: 24,
        description:
          "Todos os itens obrigatórios e botões estão claramente identificados no protótipo (*) e descritos na lista de atributos?",
        situation: null,
        observations: "",
      },
      {
        item_index: 25,
        description:
          "O campo descrição está descrito de forma clara e objetiva para entendimento do campo?",
        situation: null,
        observations: "",
      },
      {
        item_index: 26,
        description:
          "Os campos editáveis estão identificados na lista de especificação do protótipo?",
        situation: null,
        observations: "",
      },
      {
        item_index: 27,
        description:
          "Os campos que possuem domínios fechados, esses domínios foram identificados?",
        situation: null,
        observations: "",
      },
      {
        item_index: 28,
        description:
          "Todos os itens que possuem máscara estão identificados e as máscaras dos campos foram definidas?",
        situation: null,
        observations: "",
      },
      {
        item_index: 29,
        description:
          "Foram especificados os comportamentos dos botões de ação: Salvar, Limpar e Voltar, por exemplo?",
        situation: null,
        observations: "",
      },
      {
        item_index: 30,
        description:
          '"Os elementos de tela (campos) estão definidos?\nExemplo: Há definição de Nome, Valores válidos, Tipo, Formato (máscaras, formatação), Restrições (obrigatoriedade, limites, etc)"',
        situation: null,
        observations: "",
      },
      {
        item_index: 31,
        description:
          "Os filtros ou condições para as listas apresentadas pelo Sistema ao usuário estão especificados no requisito?",
        situation: null,
        observations: "",
      },
      {
        item_index: 32,
        description:
          "As regras de interface estão claras e condizentes com os campos?",
        situation: null,
        observations: "",
      },
      {
        item_index: 33,
        description:
          "Os atributos identificados nas regras de interface estão preenchidos utilizando a tabela de legenda?",
        situation: null,
        observations: "",
      },
      {
        item_index: 34,
        description:
          "Foram relacionadas as estórias impactadas e/ou relacionadas com a estória que está a ser especificada?",
        situation: null,
        observations: "",
      },
      {
        item_index: 35,
        description: "Os perfis estão definidos para cada critério de aceite?",
        situation: null,
        observations: "",
      },
      {
        item_index: 36,
        description:
          "Foi criado um critério de aceite para cada funcionalidade e/ou ação dentro da estória de usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: 37,
        description:
          "Os critérios de aceite estão escritos de forma clara e simplificada para o entendimento do usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: 38,
        description:
          "Os critérios de aceite foram definidos em conjunto com o usuário?",
        situation: null,
        observations: "",
      },
      {
        item_index: 39,
        description:
          "O primeiro passo do fluxo descreve a necessidade do perfil ao acessar o cenário?",
        situation: null,
        observations: "",
      },
      {
        item_index: 40,
        description:
          "As referências às mensagens foram criadas para o documento de mensagem?",
        situation: null,
        observations: "",
      },
      {
        item_index: 41,
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
        item_index: 1,
        description:
          "Coletar e armazenar o consentimento por escrito ou por outro meio que demonstre a manifestação de vontade do titular, de forma livre, específica e com conhecimento, exceto quando a lei aplicável permitir o processamento de dados sem o consentimento.",
        situation: null,
        observations: "",
        category: "Finalidade",
      },
    ];
  } else {
    throw new Error("Tipo de inspeção inválido");
  }

  return { templateName, templateDescription, templateItems };
}
