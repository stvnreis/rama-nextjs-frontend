'use client'
import { Divider } from "@nextui-org/react";
import { PlansCards } from "../components/plans-cards";
import {  plans } from "../components/texts/plans";

const defaultMessage = (planId: number): string => {
  return `Gostaria de saber mais sobre o plano ${planId}`
}

export default function Home() {
  return (
    <section className="py-10 flex flex-col gap-10 items-center">
      <div className="max-w-xs md:max-w-xl flex items-center justify-center">
        <h2 className="text-md md:text-3xl font-semibold text-center md:w-full">
          O plano perfeito para suas necessidades você encontra <span className="text-primary">aqui</span>
        </h2>
      </div>
      <Divider className="w-52 md:max-w-lg md:w-96 flex items-center justify-center" />
      <div className="container flex flex-col md:flex-row items-center justify-center py-8 gap-10">
        {plans.map((plan, index) => {
          return <PlansCards key={plan.name} name={plan.name} description={plan.description} title={plan.title} list={plan.list} value={plan.value} message={defaultMessage(index + 1)} />
        })}
      </div>
    </section>
  )
}
