import { ReactNode } from 'react'
import * as S from './styles'
import { InspectionDialog } from '../..'
import { MOCK_INFORMATIONS } from '../constants/mocks'
import { calculateSituationPercentage } from '../../helpers'

interface HeaderProps {
  setDialogInspectionStep: (
    value: React.SetStateAction<InspectionDialog>,
  ) => void
  handleUpdateDialogControlled: (open: boolean) => void
  tableData: any
}

export function Header({
  setDialogInspectionStep,
  handleUpdateDialogControlled,
  tableData,
}: HeaderProps) {
  function handleEditInformations() {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('edit_informations')
  }

  function handleManagerDocuments() {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('manager_documents')
  }

  const truncateLink = (link: string, maxLength: number) => {
    if (link.length > maxLength) {
      return link.slice(0, maxLength) + '...'
    }
    return link
  }

  const RecordLink = ({
    title,
    children,
  }: {
    title: string
    children: ReactNode
  }) => {
    const handleClick = () => {
      window.open(title, '_blank')
    }

    return (
      <S.RecordLink title={title} onClick={handleClick}>
        {children}
      </S.RecordLink>
    )
  }

  return (
    <S.Header>
      <S.WrapperTitleAndInfo>
        <S.WrapperTitleAndManagerdocument>
          <S.Title>{MOCK_INFORMATIONS.name}</S.Title>
          <S.EditInfoButton onClick={handleEditInformations}>
            Editar informações{' '}
          </S.EditInfoButton>
        </S.WrapperTitleAndManagerdocument>

        <S.WrapperInformation hasRecordLing={!!MOCK_INFORMATIONS.record_link}>
          <S.InfoLabel>
            <b>Responsável:</b> {MOCK_INFORMATIONS.responsable}
          </S.InfoLabel>
          <S.InfoLabel>
            <b>Contato:</b> {MOCK_INFORMATIONS.email}
          </S.InfoLabel>
          {MOCK_INFORMATIONS.participants && (
            <S.InfoLabel>
              <b>Participantes:</b> {MOCK_INFORMATIONS.participants}
            </S.InfoLabel>
          )}
        </S.WrapperInformation>

        {MOCK_INFORMATIONS.record_link && (
          <RecordLink title={MOCK_INFORMATIONS.record_link}>
            <b>Gravação disponível em:</b>{' '}
            <span>{truncateLink(MOCK_INFORMATIONS.record_link, 30)}</span>
          </RecordLink>
        )}
      </S.WrapperTitleAndInfo>

      <S.WrapperManagerAndStatus>
        <S.LastUpdate>Última atualização em 12/09/2023 às 14:00</S.LastUpdate>
        <S.ManagerButton onClick={handleManagerDocuments}>
          Gerenciar Documentos
        </S.ManagerButton>
        <S.Status>
          <b>Conclusão:</b> {calculateSituationPercentage(tableData)}%
        </S.Status>
      </S.WrapperManagerAndStatus>
    </S.Header>
  )
}
