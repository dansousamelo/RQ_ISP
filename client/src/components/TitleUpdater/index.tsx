import { useEffect } from 'react'

export function TitleUpdater({ title }: { title: string }) {
  useEffect(() => {
    document.title = `RQ_ISP • ${title}`
    return () => {
      document.title = 'RQ_ISP'
    }
  }, [title])

  return null
}
