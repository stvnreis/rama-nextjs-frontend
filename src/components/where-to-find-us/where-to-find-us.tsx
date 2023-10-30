import { Map } from './map';

export const WhereToFindUs = () => {
  return (
    <div className="where-to-find-us-container">
      <div className="flex flex-col items-center justify-center">
        <h2 className="section-title font-semibold">Venha nos visitar!</h2>
        <p className="text-center text-zinc-500">
          Não deixe para depois, marque um horário e venha conhecer nossas
          instalações
        </p>
      </div>
      <div className="w-full h-96 px-10 md:px-20 gap-5">
        <Map />
      </div>
    </div>
  );
};
