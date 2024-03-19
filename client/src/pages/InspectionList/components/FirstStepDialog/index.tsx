import { RadioGroup } from '../../../../components/RadioGroup'
import { useLoggedInspectionContext } from '../../../../contexts/LoggedInspection'
import { RADIO_ITEMS } from './constants'
import * as S from './styles'

export function FirstStepDialog() {
  const { inspectionChecklistType, updateInspectionChecklistType } =
    useLoggedInspectionContext()

  return (
    <S.RadioGroupWrapper>
      <RadioGroup
        radioItems={RADIO_ITEMS}
        value={inspectionChecklistType}
        handleChange={updateInspectionChecklistType}
      />
    </S.RadioGroupWrapper>
  )
}
