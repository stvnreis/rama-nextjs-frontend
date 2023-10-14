export interface CarouselIndicatorProps {
  activeIndex: number
  length: number
  maxIndicatorVisible?: number
  onChange: (index: number) => void
}

export default function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = 5,
  onChange,
}: CarouselIndicatorProps) {
  const maxIndicator =
    length > maxIndicatorVisible ? maxIndicatorVisible : length
  return (
    <div className="carousel-indicator-container">
      {Array.from(Array(maxIndicator), (_, index) => {
        return (
          <div
            key={index}
            className={`carousel-indicator-dots ${
              activeIndex === index
                ? 'w-4 opacity-100 bg-primary'
                : 'w-2 bg-grya-400'
            }`}
            onClick={() => onChange(index)}
          />
        )
      })}
    </div>
  )
}
