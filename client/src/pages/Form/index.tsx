import { FirstStep } from './components/FirstStep'
import { Footer } from '../../components/Footer'
import * as S from './styles'
import { HeaderWithoutAuth } from '../../components/HeaderWithoutAuth'
import { SecondStep } from './components/SecondStep'
import { useInitialInspectionContext } from '../../contexts/InitialInspectionContext'
import { ThirdStep } from './components/ThirdStep'
import { FourthStep } from './components/FourthStep'
import { TitleUpdater } from '../../components/TitleUpdater'

interface StepToRender {
  [key: number]: JSX.Element
}

export function Form() {
  const { activeStep } = useInitialInspectionContext()

  const STEP_TO_RENDER: StepToRender = {
    0: <FirstStep />,
    1: <SecondStep />,
    2: <ThirdStep />,
    3: <FourthStep />,
  }
  return (
    <>
      <TitleUpdater title="Criar inspeção" />
      <S.HomePageContainer>
        <HeaderWithoutAuth />
        {STEP_TO_RENDER[activeStep]}
        <Footer />
      </S.HomePageContainer>
    </>
  )
}
