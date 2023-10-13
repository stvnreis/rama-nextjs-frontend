import { ReactNode } from 'react'

export interface ItemProps {
  children?: ReactNode
  index: number
  activeIndex: number
}
//
export default function CarouselItem({
  children,
  index,
  activeIndex,
}: ItemProps) {
  const offset = (index - activeIndex) / 4
  const direction = Math.sign(index - activeIndex)
  const absOffset = Math.abs(offset)

  const cssTransformProps = `
    rotateY(calc(   ${offset}    * 55deg))
    scaleY(calc(1 + ${absOffset} * -0.1))
    translateX(calc(${direction} * -3.5rem))
    translateZ(calc(${absOffset} * -35rem))
  `

  const cssOpacity = `
    ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
  `

  const cssDisplay = `
    ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}
  `

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProps,
        opacity: cssOpacity,
        display: cssDisplay,
      }}
    >
      {children}
    </div>
  )
}
