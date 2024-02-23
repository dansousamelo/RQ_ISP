import { useQuery } from 'react-query'
import { getInspectionList } from '../services'

export function getInspectionListRepository({
  accessCode,
  token,
}: {
  accessCode: string
  token: string
}) {
  async function fetchInspectionList(): Promise<any> {
    const response = await getInspectionList({ accessCode, token })

    return response.data.data
  }

  const { data: inspectionList, isFetching: isInspectionListLoading } =
    useQuery([`inspectionList-${accessCode}`], fetchInspectionList, {
      staleTime: Infinity,
    })

  return { isInspectionListLoading, inspectionList }
}
