import React, { ReactNode } from 'react'
import CarouselItem from './carousel-item'

export interface CarouselProps {
  width?: number
  height?: number
  items: ReactNode[]
}

export default function Carousel({ width, height, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0)

  return (
    <div className="carousel-container">
      {items.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}
    </div>
  )
}
