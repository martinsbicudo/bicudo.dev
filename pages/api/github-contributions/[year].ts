import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'
import https from 'https'

import { ContributionsDataType } from '~/services/get-github-contributions/interface'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ContributionsDataType>
) => {
  const { year } = req.query
  const { data } = await axios.get<ContributionsDataType>(
    `https://skyline.github.com/martinsbicudo/${year}.json`,
    {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
  )

  res.status(200).json(data)
}

export default handler
