import * as S from './styles'

interface ObservationsDialogProps {
  setObservationsData: React.Dispatch<React.SetStateAction<string>>
  observationsData: string
}

export function ObservationsDialog({
  setObservationsData,
  observationsData,
}: ObservationsDialogProps) {
  return (
    <S.Container>
      <textarea
        placeholder="Insira aqui observações, justificativas ou ações corretivas referentes ao item inspecionado"
        rows={5}
        cols={20}
        value={observationsData}
        onChange={(e) => setObservationsData(e.target.value)}
      />
    </S.Container>
  )
}
