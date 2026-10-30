import Image from 'next/image'
import { TbArrowUpRight } from 'react-icons/tb'

import * as S from './styles'

type SideProjectItemProps = {
  name: string
  url: string
  logo: string
}

const SideProjectItem = ({ name, url, logo }: SideProjectItemProps) => (
  <S.SideProjectItemWrapper href={url} target="_blank" rel="noreferrer">
    <S.SideProjectItem>
      <S.SideProjectItemLogo>
        <Image src={logo} alt="" width={16} height={16} />
      </S.SideProjectItemLogo>
      <S.SideProjectItemName>{name}</S.SideProjectItemName>
      <TbArrowUpRight aria-hidden />
    </S.SideProjectItem>
  </S.SideProjectItemWrapper>
)

export default SideProjectItem
