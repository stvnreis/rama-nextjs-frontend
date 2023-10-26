import {
  MapPinned,
  Video,
  Building2,
  Wrench,
  Accessibility,
  Wifi,
  Armchair,
  CarFront,
} from 'lucide-react';

export const OurSpace = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-14 px-20">
      <label className="text-primary text-2xl font-semibold">
        Porque vir para o nosso espaço?
      </label>

      <div className="what-we-offer-container">
        <div className="what-we-offer">
          <div className="what-we-offer-item-container">
            <div className="flex items-center gap-2">
              <MapPinned size={40} />
              Localizacao
            </div>
            <span className="what-we-offer-item-text">
              Localização privilegiada no novo centro comercial da cidade.
            </span>
          </div>
          <div className="what-we-offer-item-container">
            <div className="what-we-offer-item">
              <Video size={40} />
              Segurança
            </div>
            <span className="what-we-offer-item-text">
              Espaço monitorado por câmeras de segurança e alarme.
            </span>
          </div>
        </div>

        <div className="what-we-offer">
          <div className="what-we-offer-item-container">
            <div className="what-we-offer-item">
              <Building2 size={40} />
              Alto padrao
            </div>
            <span className="what-we-offer-item-text">
              Fachada moderna e arrojada, portaria eletrônica, ambiente em
              porcelanato, ar condicionado e elevador on-line
            </span>
          </div>
          <div className="what-we-offer-item-container">
            <div className="what-we-offer-item">
              <Wrench size={40} />
              Manutenção
            </div>
            <span className="what-we-offer-item-text">
              Sem custos com reformas, limpeza, IPTU e condomínio.
            </span>
          </div>
        </div>

        <div className="what-we-offer">
          <div className="what-we-offer-item-container">
            <div className="flex items-center gap-2">
              <Accessibility size={40} />
              Acessibilidade
            </div>
            <span className="what-we-offer-item-text"></span>
          </div>
          <div className="what-we-offer-item-container">
            <div className="what-we-offer-item">
              <Wifi size={40} />
              Wifi gratuito
            </div>
            <span className="what-we-offer-item-text"></span>
          </div>
        </div>

        <div className="what-we-offer">
          <div className="what-we-offer-item-container">
            <div className="what-we-offer-item">
              <Armchair size={40} />
              Recepção compartilhada
            </div>
            <span className="what-we-offer-item-text"></span>
          </div>
          <div className="what-we-offer-item-container">
            <div className="what-we-offer-item">
              <CarFront size={40} />
              Estacionameto Rotativo
            </div>
            <span className="what-we-offer-item-text"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
