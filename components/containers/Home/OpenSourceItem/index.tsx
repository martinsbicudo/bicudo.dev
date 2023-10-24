import { OpenSourceItemProps } from './interface'
import * as S from './styles'

const OpenSourceItem = ({ name, url, description }: OpenSourceItemProps) => {
  return (
    <S.OpenSourceItemWrapper href={url} target="_blank">
      <S.OpenSourceItem>
        <S.OpenSourceItemContent>
          <S.OpenSourceItemTitle>{name}</S.OpenSourceItemTitle>
          <S.OpenSourceItemDescription>
            {description}
          </S.OpenSourceItemDescription>
        </S.OpenSourceItemContent>
      </S.OpenSourceItem>
    </S.OpenSourceItemWrapper>
  )
}

export default OpenSourceItem
