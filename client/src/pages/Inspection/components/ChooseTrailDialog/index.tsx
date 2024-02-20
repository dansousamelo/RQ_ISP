import { InspectionDialog } from '../..'
import { TRAIL_ITEMS } from '../../constants'
import { TrailType } from '../../hooks/useDialogItemToRender'
import * as S from './styles'

interface ChooseTrailDialogProps {
  trailType: TrailType
  updateTrailType: (value: TrailType) => void
  hasDocuments: boolean
  setDialogInspectionStep: (
    value: React.SetStateAction<InspectionDialog>,
  ) => void
}

export function ChooseTrailDialog({
  trailType,
  updateTrailType,
  hasDocuments = false,
  setDialogInspectionStep,
}: ChooseTrailDialogProps) {
  return (
    <S.RadioGroupWrapper>
      <S.RadioGroupRoot
        value={trailType}
        onValueChange={(value: TrailType) => updateTrailType(value)}
        aria-label="View density"
      >
        {TRAIL_ITEMS.map(({ value, id, label, description }) => {
          const isDisabled = value === 'mark_document' && !hasDocuments
          const isDisabledClick =
            value === 'text_editor' || hasDocuments
              ? () => updateTrailType(value as TrailType)
              : undefined

          return (
            <>
              <S.WrapperContent key={id}>
                <S.RadioGroupItem disabled={isDisabled} value={value} id={id}>
                  <S.RadioGroupIndicator />
                </S.RadioGroupItem>
                <S.Label
                  isDisabled={isDisabled}
                  hasDescription={true}
                  htmlFor={id}
                >
                  {label}
                </S.Label>
              </S.WrapperContent>

              <S.Description isDisabled={isDisabled} onClick={isDisabledClick}>
                {description}
              </S.Description>

              {isDisabled && (
                <S.ErrorMessage>
                  Antes de usar este tipo de rastro, adicione documentos
                  primeiro. Para adicionar documentos clique{' '}
                  <b
                    onClick={() => setDialogInspectionStep('manager_documents')}
                    style={{ cursor: 'pointer' }}
                  >
                    aqui
                  </b>
                  .
                </S.ErrorMessage>
              )}
            </>
          )
        })}
      </S.RadioGroupRoot>
    </S.RadioGroupWrapper>
  )
}
