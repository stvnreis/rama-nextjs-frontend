import { Building2, MapPinned, Trophy, Video, Wrench } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="py-10 my-10 px-10 md:px-20 gap-10 w-full flex flex-col md:flex-row justify-center items-center md:justify-between">
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-3 md:items-start md:text-left">
        <label className="text-primary text-lg" style={{ borderRadius: '5px' }}>
          SOBRE NÓS
        </label>
        <p>Somos um espaço com excelente infraestrutura por assinatura.</p>
        <p>
          Permitimos que empreendedores e empresários tenha um endereço
          comercial e fiscal sem as preocupações de um escritório tradicional.
        </p>
        <p>
          Assinantes RAMÁ Business também pode contratar escritórios, sala de
          reunião, sala de atendimento e sala clinica sob demanda
        </p>
      </div>
      <div className="flex flex-col w-full md:w-2/3 items-center justify-center">
        <label className="mb-10">Vantagens</label>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:max-w-1/2">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-3 items-center md:max-w-1/2">
              <div className="flex items-center justify-center gap-2">
                <MapPinned size={30} />
                Localizacao
              </div>
              <span className="text-[10px] md:text-xs max-w-1/4">
                Localização privilegiada no novo centro da cidade.
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Video size={30} />
              Segurança
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex items-center justify-center gap-2">
              <Building2 size={30} />
              Alto padrao
            </div>
            <div className="flex items-center justify-center gap-2">
              <Wrench size={30} />
              Manutenção
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
