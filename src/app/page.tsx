'use client'

import { Divider, Image } from '@nextui-org/react'
import { PlansCards } from '../components/plans-cards'
import { plans } from '../components/texts/plans'
import AditionalInformation from '../components/aditional-information'
import Carousel from '../components/carousel'

const defaultMessage = (plan: string): string => {
  return `Gostaria de saber mais sobre o plano ${plan}`
}

const imageItems = [
  <Image
    className="w-full h-full"
    src="/recepcao-1.png"
    alt="card-1"
    key={1}
  />,
  <Image
    className="w-full h-full"
    src="/sala-coworking-1.jpeg"
    alt="card-1"
    key={2}
  />,
]

export default function Home() {
  const images: string[] = ['/recepcao-1.png', '/sala-coworking-1.jpeg']
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Carousel items={imageItems} />
      </div>
      <div className="py-10 flex flex-col gap-2 items-center">
        <div className="max-w-xs md:max-w-xl flex items-center justify-center pt-20">
          <h2 className="text-md md:text-3xl font-semibold text-center md:w-full">
            O plano perfeito para sua empresa você encontra
            <span className="text-primary"> aqui</span>
          </h2>
        </div>
        <Divider className="w-52 md:max-w-lg md:w-96 flex items-center justify-center bg-black" />
        <div className="container flex flex-col px-8 lg:flex-row items-center justify-center pt-16 gap-10">
          {plans.map((plan, index) => {
            return (
              <PlansCards
                key={index}
                plan={plan}
                isMiddleCard={index === Math.floor(plans.length / 2)}
                message={defaultMessage(plan.name)}
              />
            )
          })}
        </div>
        <AditionalInformation />
      </div>
    </div>
  )
}
