import { plans } from '../texts/plans';
import AditionalInformation from './aditional-information';
import { PlansCards } from './plans-cards';

export const PlansContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10">
      <label className="text-2xl">Confira nossos planos</label>
      <div className="container flex flex-col px-8 xl:flex-row items-center justify-center pt-16 gap-6">
        {plans.map((plan, index) => {
          return (
            <PlansCards
              key={`${plan.name} - ${index}`}
              plan={plan}
              isMiddleCard={index === Math.floor(plans.length / 2)}
            />
          );
        })}
      </div>
      <AditionalInformation />
    </div>
  );
};
