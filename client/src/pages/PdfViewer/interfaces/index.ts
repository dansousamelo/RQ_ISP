interface BoundingRect {
  x1: number
  y1: number
  x2: number
  y2: number
  width: number
  height: number
}

export interface PositionProps {
  boundingRect: BoundingRect
  rects?: BoundingRect[]
  pageNumber?: number
}

export interface CommentProps {
  text: string
  emoji: string
}

export interface ContentProps {
  text?: string
  image?: string
}

export interface HighlightProps {
  content: ContentProps
  position: PositionProps
  comment: CommentProps
  id: string
}
