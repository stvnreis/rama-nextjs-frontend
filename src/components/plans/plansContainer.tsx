import { plans } from '../texts/plans';
import AditionalInformation from './aditionalInformation';
import { PlanCards } from './planCard';

export const PlansContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10">
      <label className="section-title">Confira nosso plano para escritório virtual</label>
      <div className="container flex flex-col px-8 md:flex-row items-center justify-center pt-16 gap-6">
        {plans.map((plan, index) => {
          return (
            <PlanCards
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
