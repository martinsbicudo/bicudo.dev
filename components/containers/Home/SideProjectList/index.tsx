import { SIDE_PROJECTS } from '~/constants'

import SideProjectItem from '../SideProjectItem'
import * as S from './styles'

const SideProjectList = () => (
  <S.SideProjectList>
    {SIDE_PROJECTS.PROJECTS.map(({ name, url, logo }) => (
      <SideProjectItem key={name} name={name} url={url} logo={logo} />
    ))}
  </S.SideProjectList>
)

export default SideProjectList
