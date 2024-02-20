import { useEffect, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import notFoundAnimationData from './assets/not_found.json'
import * as S from './styles'

export function PageNotFound() {
  const container = useRef<HTMLDivElement>(null)

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
    <S.Container>
      <S.Animation ref={container} />
      <S.GoBackButton onClick={() => window.history.back()}>
        <S.BackIcon /> Voltar
      </S.GoBackButton>
    </S.Container>
  )
}
