export const languageTranslate = (language: string) => {

  if (language === 'en') {
    return 'Inglês'
  }
  else if (language === 'pt') {
    return 'Português'
  }
  else if (language === 'es') {
    return 'Espanhol'
  }
  else if (language === 'nl') {
    return 'Holandês'
  }
  else if (language === 'ko') {
    return 'Koreano'
  }
  else if (language === 'fr') {
    return 'Francês'
  }
  else if (language === 'it') {
    return 'Italiano'
  }
  else if (language === 'ru') {
    return 'Russo'
  }
  else if (language === 'zh') {
    return 'Mandarin'
  }
  else {
    return language
  }
}

export const statusTranslate = (status: string) => {
  if (status === 'Released') {
    return 'Lançado'
  }
  else {
    return 'Em produção'
  }
}