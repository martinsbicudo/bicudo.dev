import CONSTANTS from '~/constants'

const getDomainWithLocale = (locale: string) => {
  if (locale === 'pt_br') return CONSTANTS.SITE.DOMAIN
  return `${CONSTANTS.SITE.DOMAIN}/${locale}`
}

export default getDomainWithLocale
