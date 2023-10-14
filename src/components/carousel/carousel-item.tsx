import { ReactNode } from 'react'

export interface ItemProps {
  children?: ReactNode
  index: number
  activeIndex: number
  onChange: (index: number) => void
}
//
export default function CarouselItem({
  children,
  index,
  activeIndex,
  onChange,
}: ItemProps) {
  const offset = (index - activeIndex) / 4
  const direction = Math.sign(index - activeIndex)
  const absOffset = Math.abs(offset)

  const cssTransformProps = `
    rotateY(calc(   ${offset}    * 55deg))
    scaleY(calc(1 + ${absOffset} * -0.5))
    translateX(calc(${direction} * -5rem))
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
      className={`carousel-item ${
        index === activeIndex ? 'blur-none' : 'blur-sm hover:blur-none'
      }`}
      style={{
        transform: cssTransformProps,
        opacity: cssOpacity,
        display: cssDisplay,
      }}
      onClick={() => onChange(index)}
    >
      {children}
    </div>
  )
}
