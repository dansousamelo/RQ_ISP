import { RadioGroup } from '../../../../components/RadioGroup'
import { useLoggedInspectionContext } from '../../../../contexts/LoggedInspection'
import * as S from './styles'

export function FirstStepDialog() {
  const { inspectionChecklistType, updateInspectionChecklistType } =
    useLoggedInspectionContext()

  return (
    <S.RadioGroupWrapper>
      <RadioGroup
        value={inspectionChecklistType}
        handleChange={updateInspectionChecklistType}
      />
    </S.RadioGroupWrapper>
  )
}
