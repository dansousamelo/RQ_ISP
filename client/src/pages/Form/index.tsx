import { FirstStep } from './components/FirstStep'
import { Footer } from '../../components/Footer'
import * as S from './styles'
import { HeaderWithoutAuth } from '../../components/HeaderWithoutAuth'

export function Form() {
  return (
    <S.HomePageContainer>
      <HeaderWithoutAuth />
      <FirstStep />
      <Footer />
    </S.HomePageContainer>
  )
}
