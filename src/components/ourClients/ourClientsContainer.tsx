import { OurClientsCard } from './ourClientsCard';

export const OurClientsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <label className="text-2xl">Nossos assinantes</label>
      <div>
        <OurClientsCard />
      </div>
    </div>
  );
};
