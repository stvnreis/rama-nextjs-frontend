'use client'
import { Divider } from '@nextui-org/react'
import { PlansCards } from '../components/plans-cards'
import { plans } from '../components/texts/plans'

const defaultMessage = (plan: string): string => {
  return `Gostaria de saber mais sobre o plano ${plan}`
}

export default function Home() {
  const plansCards = () => {
    return (
      <div>
        <PlansCards
          key={plans[0].name}
          name={plans[0].name}
          description={plans[0].description}
          title={plans[0].title}
          list={plans[0].list}
          value={plans[0].value}
          message={defaultMessage(plans[0].name)}
        />
        <PlansCards
          key={plans[1].name}
          name={plans[1].name}
          description={plans[1].description}
          title={plans[1].title}
          list={plans[1].list}
          value={plans[1].value}
          message={defaultMessage(plans[0].name)}
        />
        <PlansCards
          key={plans[2].name}
          name={plans[2].name}
          description={plans[2].description}
          title={plans[2].title}
          list={plans[2].list}
          value={plans[2].value}
          message={defaultMessage(plans[0].name)}
        />
      </div>
    )
  }
  return (
    <section className="py-10 flex flex-col gap-10 items-center">
      <div className="max-w-xs md:max-w-xl flex items-center justify-center">
        <h2 className="text-md md:text-3xl font-semibold text-center md:w-full">
          O plano perfeito para suas necessidades você encontra{' '}
          <span className="text-primary">aqui</span>
        </h2>
      </div>
      <Divider className="w-52 md:max-w-lg md:w-96 flex items-center justify-center" />
      <div className="container flex flex-col px-8 lg:flex-row items-center justify-center py-8 gap-10">
        {/* {plans.map((plan, index) => {
          return (
            <PlansCards
              key={plan.name}
              name={plan.name}
              description={plan.description}
              title={plan.title}
              list={plan.list}
              value={plan.value}
              message={defaultMessage(index + 1)}
            />
          )
        })} */}
        <PlansCards
          key={plans[0].name}
          name={plans[0].name}
          description={plans[0].description}
          title={plans[0].title}
          list={plans[0].list}
          value={plans[0].value}
          message={defaultMessage(plans[0].name)}
        />
        <PlansCards
          key={plans[1].name}
          name={plans[1].name}
          description={plans[1].description}
          title={plans[1].title}
          list={plans[1].list}
          value={plans[1].value}
          middleCard={true}
          message={defaultMessage(plans[0].name)}
        />
        <PlansCards
          key={plans[2].name}
          name={plans[2].name}
          description={plans[2].description}
          title={plans[2].title}
          list={plans[2].list}
          value={plans[2].value}
          message={defaultMessage(plans[0].name)}
        />
      </div>
    </section>
  )
}
