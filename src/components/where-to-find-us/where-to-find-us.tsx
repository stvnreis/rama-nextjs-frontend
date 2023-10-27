import { Map } from './map';

export const WhereToFindUs = () => {
  return (
    <div className="where-to-find-us-container">
      <div className="flex flex-col items-center justify-center">
        <h2 className="section-title font-semibold">Venha nos visitar!</h2>
        <p>
          Não deixe para depois, marque um horário e venha conhecer nossas
          instalações
        </p>
      </div>
      <div className="w-full h-96 flex flex-col lg:flex-row px-10 md:px-20 gap-5">
        {/* <div className="w-full flex justify-start items-start">
          <span className="text-justify">
            Construído em Iocalização privilegiada, próximo ao Poupa-Tempo e
            Câmara Municipal, Ramá Business está localizado no novo centro da
            cidade de Birigui-SP.
          </span>
        </div> */}
        <Map />
      </div>
    </div>
  );
};
