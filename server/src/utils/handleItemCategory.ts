export function translateCategory(category: string): string {
    const translations: Record<string, string> = {
      "accountabilityAndLegalReporting": "Responsabilização e prestação de contas",
      "needs": "Necessidades",
      "purpose": "Finalidade",
      "openAcess": "Livre acesso",
      "dataQuality": "Qualidade de Dados",
      "transparency": "Transparência",
      "adequacy": "Adequação",
      "security": "Segurança",
      "prevention": "Prevenção",
      "nonDiscrimination": "Não Discriminação"
    };
  
    return translations[category] || category;
}