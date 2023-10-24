import React from 'react'

import { OPEN_SOURCE } from '~/constants'

import OpenSourceItem from '../OpenSourceItem'
import * as S from './styles'

const OpenSourceList = () => (
  <>
    <S.OpenSourceListTitle>Open Source</S.OpenSourceListTitle>
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
  </>
)

export default OpenSourceList
