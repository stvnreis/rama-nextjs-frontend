import { plans } from '../texts/plans';
import AditionalInformation from './informacoes-adicionais-card';
import { PlanoCard } from './plano-card';

export const PlanoContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-10">
      <label className="section-title">
        Confira nosso plano para escritório virtual
      </label>
      <div className="container flex flex-col md:flex-row items-center justify-center pt-16 gap-6">
        {plans.map((plan, index) => {
          return (
            <PlanoCard
              key={`${plan.name} - ${index}`}
              plano={plan}
              isMiddleCard={index === Math.floor(plans.length / 2)}
            />
          );
        })}
      </div>
      <AditionalInformation />
    </div>
  );
};
