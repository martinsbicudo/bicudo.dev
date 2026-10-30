import { Eyebrow } from '@Commons'

import { OPEN_SOURCE } from '~/constants'

import OpenSourceItem from '../OpenSourceItem'
import * as S from './styles'

const OpenSourceList = () => (
  <S.OpenSourceSection>
    <Eyebrow>Open source</Eyebrow>
    <S.OpenSourceList>
      {OPEN_SOURCE.PROJECTS.map(({ name, url, description }) => (
        <OpenSourceItem
          key={name}
          name={name}
          url={url}
          description={description}
        />
      ))}
    </S.OpenSourceList>
  </S.OpenSourceSection>
)

export default OpenSourceList
