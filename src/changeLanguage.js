function changeLanguage(languages) {
  const locale = (localStorage.getItem('lang') === languages.EN) ? languages.RU : languages.EN
  if (locale) {
    localStorage.removeItem('lang', locale)
  }
  localStorage.setItem('lang', locale)
}

export default changeLanguage
