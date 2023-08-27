import { SITE } from '~/constants'

const getDomainWithLocale = (locale: string) => {
  if (locale === 'pt_br') return SITE.DOMAIN
  return `${SITE.DOMAIN}/${locale}`
}

export default getDomainWithLocale
