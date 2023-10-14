import { ReactNode } from 'react'

export interface ItemProps {
  children?: ReactNode
  index: number
  activeIndex: number
  onChange: (index: number) => void
}

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
    translateX(calc(${direction} * -3.5rem))
    translateZ(calc(${absOffset} * -35rem))
  `

  const cssOpacity = `
    ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
  `

  const cssDisplay = `
    ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}
  `

  function handle(index: number, activeIndex: number) {
    index === activeIndex ? openImage(index) : onChange(index)
  }

  function openImage(index: number) {
    console.log('oi')
  }

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProps,
        opacity: cssOpacity,
        display: cssDisplay,
      }}
      onClick={() => handle(index, activeIndex)}
    >
      {children}
    </div>
  )
}
