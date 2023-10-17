'use client'

import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import { PlansCards } from '../components/plans-cards'
import { plans } from '../components/texts/plans'
import AditionalInformation from '../components/aditional-information'
import Carousel from '../components/carousel/carousel'
import OurServices from '../components/services/our-services'

const defaultMessage = (plan: string): string => {
  return `Gostaria de saber mais sobre o plano ${plan}`
}

const items = [
  <Image
    className="w-full h-full"
    src="https://drive.google.com/uc?export=view&id=1mqluxl7HgaFdFQkvi0c5gViZvUHvb1Uh"
    alt="card-1"
    loading="lazy"
    // radius="none"
    fill
    sizes="400vw"
    style={{
      objectFit: 'cover',
    }}
    key={0}
  />,
  <Image
    className="w-full h-full"
    src="https://drive.google.com/uc?export=view&id=1Owt8TeGtF7OJP1RlRndrF4UAENARS6ou"
    alt="card-1"
    loading="lazy"
    // radius="none"
    fill
    sizes="400vw"
    style={{
      objectFit: 'cover',
    }}
    key={1}
  />,
  <Image
    className="w-full h-full"
    src="https://drive.google.com/uc?export=view&id=1wIkX_5BwIQ0DZS6-gnvUlj46XkQtQxxm"
    alt="card-1"
    loading="lazy"
    // radius="none"
    fill
    sizes="400vw"
    style={{
      objectFit: 'cover',
    }}
    key={2}
  />,
  <Image
    className="w-full h-full"
    src="https://drive.google.com/uc?export=view&id=11euqIsY7HOEJsw-L67THio7rqTHfzTvj"
    alt="card-1"
    loading="lazy"
    // radius="none"
    fill
    sizes="400vw"
    style={{
      objectFit: 'cover',
    }}
    key={3}
  />,
]

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Carousel items={items} />
      <div className="py-10 flex flex-col gap-2 items-center">
        <div className="max-w-xs md:max-w-xl flex items-center justify-center pt-20">
          <h2 className="text-md md:text-3xl font-semibold text-center md:w-full">
            O plano perfeito para sua empresa você encontra
            <span className="text-primary"> aqui</span>
          </h2>
        </div>
        <Divider className="w-52 md:max-w-lg md:w-96 flex items-center justify-center bg-black" />
        <div className="container flex flex-col px-8 xl:flex-row items-center justify-center pt-16 gap-6">
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
      <OurServices />
    </div>
  )
}
