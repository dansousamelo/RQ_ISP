import { useEffect, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import notFoundAnimationData from './assets/not_found.json'
import * as S from './styles'
import { TitleUpdater } from '../../components/TitleUpdater'
import { useNavigate } from 'react-router-dom'

export function PageNotFound() {
  const container = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    let anim: AnimationItem | undefined

    if (container.current) {
      anim = lottie.loadAnimation({
        container: container.current,
        animationData: notFoundAnimationData,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      })
    }

    return () => {
      if (anim) {
        anim.destroy()
      }
    }
  }, [])

  return (
    <>
      <TitleUpdater title="Página não encontrada" />
      <S.Container>
        <S.Animation ref={container} />
        <S.GoBackButton onClick={() => navigate('/')}>
          <S.BackIcon /> Voltar para o início
        </S.GoBackButton>
      </S.Container>
    </>
  )
}
