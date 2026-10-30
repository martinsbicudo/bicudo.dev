import { TbArrowUpRight } from 'react-icons/tb'

import { OpenSourceItemProps } from './interface'
import * as S from './styles'

const OpenSourceItem = ({ name, url, description }: OpenSourceItemProps) => {
  return (
    <S.OpenSourceItemWrapper href={url} target="_blank" rel="noreferrer">
      <S.OpenSourceItem>
        <S.OpenSourceItemHeader>
          <S.OpenSourceItemTitle>{name}</S.OpenSourceItemTitle>
          <TbArrowUpRight aria-hidden />
        </S.OpenSourceItemHeader>
        <S.OpenSourceItemDescription>{description}</S.OpenSourceItemDescription>
      </S.OpenSourceItem>
    </S.OpenSourceItemWrapper>
  )
}

export default OpenSourceItem
