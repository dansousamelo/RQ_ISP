import { TableDataProps } from '../../repository/getInspectionItemsRepository'
import * as S from './styles'

interface ObservationsDialogProps {
  setObservationsData: React.Dispatch<React.SetStateAction<string>>
  item: TableDataProps
}

export function ObservationsDialog({
  setObservationsData,
  item,
}: ObservationsDialogProps) {
  return (
    <S.Container>
      <textarea
        placeholder="Insira aqui observações, justificativas ou ações corretivas referentes ao item inspecionado"
        rows={5}
        cols={20}
        value={item.observations as string}
        onChange={(e) => setObservationsData(e.target.value)}
      />
    </S.Container>
  )
}
