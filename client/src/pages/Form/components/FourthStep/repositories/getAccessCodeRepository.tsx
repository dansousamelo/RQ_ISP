import { useQuery } from 'react-query'
import { getAccessCode } from '../services'

export function getAccessCodeRepository() {
  async function fetchAccessCode(): Promise<string> {
    const response = await getAccessCode()

    return response.data.data.accessCode
  }

  const { data: accessCode, isFetching: isAccessCodeFetching } = useQuery(
    [`access_code`],
    fetchAccessCode,
    {
      staleTime: Infinity,
    },
  )

  return { isAccessCodeFetching, accessCode }
}
