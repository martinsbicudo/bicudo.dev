import Image from 'next/image'

import * as S from './styles'

type SideProjectItemProps = {
  name: string
  url: string
  logo: string
}

const SideProjectItem = ({ name, url, logo }: SideProjectItemProps) => (
  <S.SideProjectItemWrapper href={url} target="_blank">
    <S.SideProjectItem>
      <S.SideProjectItemLogo>
        <Image src={logo} alt={name} width={20} height={20} />
      </S.SideProjectItemLogo>
      <S.SideProjectItemName>{name}</S.SideProjectItemName>
    </S.SideProjectItem>
  </S.SideProjectItemWrapper>
)

export default SideProjectItem
