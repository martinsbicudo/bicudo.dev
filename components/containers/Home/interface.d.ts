import { PostType } from '@Containers/PostItem/interface'

import { ResultContributionType } from '~/services/get-github-contributions/interface'

export interface HomeProps {
  posts: PostType[]
  githubContributions: ResultContributionType[]
}
