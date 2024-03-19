import { ReactNode } from 'react'
import * as S from './styles'
import { InspectionDialog } from '../..'
import { calculateSituationPercentage } from '../../helpers'
import { HeaderInspectionProps } from '../../repository/getInspectionHeaderRepository'
import { TableDataProps } from '../../repository/getInspectionItemsRepository'

interface HeaderProps {
  setDialogInspectionStep: (
    value: React.SetStateAction<InspectionDialog>,
  ) => void
  handleUpdateDialogControlled: (open: boolean) => void
  tableData: TableDataProps[]
  headerData: HeaderInspectionProps
}

export function Header({
  setDialogInspectionStep,
  handleUpdateDialogControlled,
  tableData,
  headerData,
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
          <S.Title>{headerData.name}</S.Title>
          <S.EditInfoButton onClick={handleEditInformations}>
            Editar informações{' '}
          </S.EditInfoButton>
        </S.WrapperTitleAndManagerdocument>

        <S.WrapperInformation hasRecordLing={!!headerData.recordingUrl}>
          <S.InfoLabel>
            <b>Responsável:</b> {headerData.responsible}
          </S.InfoLabel>
          <S.InfoLabel>
            <b>Contato:</b> {headerData.responsibleEmail}
          </S.InfoLabel>
          {headerData.participants && (
            <S.InfoLabel>
              <b>Participantes:</b> {headerData.participants}
            </S.InfoLabel>
          )}
        </S.WrapperInformation>

        {headerData.recordingUrl && (
          <RecordLink title={headerData.recordingUrl}>
            <b>Gravação disponível em:</b>{' '}
            <span>{truncateLink(headerData.recordingUrl, 30)}</span>
          </RecordLink>
        )}
      </S.WrapperTitleAndInfo>

      <S.WrapperManagerAndStatus>
        <S.LastUpdate>
          Última atualização em {headerData.updatedAt}
        </S.LastUpdate>
        <S.ManagerButton onClick={handleManagerDocuments}>
          Gerenciar Documentos
        </S.ManagerButton>
        <S.Status>
          <b>Concluído:</b> {calculateSituationPercentage(tableData)}%
        </S.Status>
      </S.WrapperManagerAndStatus>
    </S.Header>
  )
}
