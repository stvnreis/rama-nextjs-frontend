import React, { ReactNode } from 'react'
import CarouselItem from './carousel-item'

import CarouselIndicator from './carousel-indicator'

export interface CarouselProps {
  width?: number
  height?: number
  items: ReactNode[]
}

export default function Carousel({ width, height, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState<number>(0)

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev
    })
  }

  function handlePreviousItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev
    })
  }

  return (
    <div className="carousel-container">
      {/* {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePreviousItemBtn}
        >
          <ChevronRight className="rotate-180 text-white" />
        </button>
      )} */}
      {items.map((item, index) => (
        <CarouselItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          onChange={(index) => setActiveIndex(index)}
        >
          {item}
        </CarouselItem>
      ))}
      {/* {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <ChevronRight className="text-white" />
        </button>
      )} */}
      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onChange={(index) => setActiveIndex(index)}
      />
    </div>
  )
}
