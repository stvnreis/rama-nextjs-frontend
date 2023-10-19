import { Image } from '@nextui-org/react';

import { Reveal } from './reveal';

import { Building2, MapPinned, Trophy, Video, Wrench } from 'lucide-react';

export default function AboutUs() {
  return (
    // <div className="bg-zinc-900 text-white py-52 my-10 px-10 md:px-20 gap-10 w-full flex flex-col md:flex-row justify-center items-center md:justify-between">
    //   <div className=" flex flex-col w-full md:w-1/2 items-center justify-center gap-3 md:items-start md:text-justify text-sm">
    //     <label
    //       className="text-primary text-lg w-full flex justify-center"
    //       style={{ borderRadius: '5px' }}
    //     >
    //       SOBRE NÓS
    //     </label>
    //     <p>Somos um espaço com excelente infraestrutura por assinatura.</p>
    //     <br />
    //     <p>
    //       Permitimos que empreendedores e empresários tenha um endereço
    //       comercial e fiscal sem as preocupações de um escritório tradicional.
    //     </p>
    //     <br />
    //     <p>
    //       Assinantes RAMÁ Business também pode contratar escritórios, sala de
    //       reunião, sala de atendimento e sala clinica sob demanda
    //     </p>
    //   </div>
    //   <div className="flex flex-col w-full md:w-2/3 items-center justify-center">
    //     <label className="mb-5 text-primary opacity-90">Vantagens</label>
    //     <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:max-w-1/2">
    //       <div className="flex flex-col gap-10 w-full justify-center items-center">
    //         <div className="flex flex-col gap-3 items-center md:max-w-1/2">
    //           <div className="flex items-center justify-center gap-2">
    //             <MapPinned size={30} />
    //             Localizacao
    //           </div>
    //           <span className="text-sm">
    //             Localização privilegiada no novo centro da cidade.
    //           </span>
    //         </div>
    //         <div className="flex flex-col gap-3 items-center md:max-w-1/2">
    //           <div className="flex items-center justify-center gap-2">
    //             <Video size={30} />
    //             Segurança
    //           </div>
    //           <span className="text-sm">
    //             Espaço monitorado por câmeras de segurança e alarme.
    //           </span>
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-10 w-full">
    //         <div className="flex flex-col gap-3 items-center md:max-w-1/2">
    //           <div className="flex items-center justify-center gap-2">
    //             <Building2 size={30} />
    //             Alto padrao
    //           </div>
    //           <span className="text-sm">
    //             Linda fachada, ambientes com porcelanato, ar condicionado e
    //             elevador.
    //           </span>
    //         </div>
    //         <div className="flex flex-col gap-3 items-center md:max-w-1/2">
    //           <div className="flex items-center justify-center gap-2">
    //             <Wrench size={30} />
    //             Manutenção
    //           </div>
    //           <span className="text-sm">
    //             Sem custos com reformas, limpeza, IPTU e condomínio.
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // bg-zinc-900 text-zinc-300
    <section className="py-24 px-10 gap-20 md:px-20 w-full justify-center items-center md:justify-between">
      <div className="flex flex-col md:flex-row gap-10">
        <Reveal width="100%">
          <Image
            src="/frente-rama-business.jpeg"
            alt="Frente Ramá Business"
            width={600}
            loading="lazy"
            radius="lg"
          />
        </Reveal>
        <Reveal width="100%">
          <div className="xl:mt-10 flex flex-col w-full md:w-full items-center justify-center gap-8 md:items-start">
            <label className="text-2xl xl:text-5xl font-semibold">
              Edifício comercial{' '}
              <span className="text-3xl xl:text-6xl">Ramá Business</span>
            </label>
            <div className="flex flex-col gap-4 text-medium text-justify text-zinc-600">
              <p>
                Somos um centro de negócios, empreendimento de alto padrão e
                arquitetura moderna, destinado a locações corporativas, possui
                elevador online e estacionamento rotativo. Localizado no novo
                centro comercial na cidade de Birigui-SP, nosso espaço é voltado
                para o empreendedor arrojado e dinâmico que busca fortalecer e
                sedimentar sua marca.
              </p>
              <p>
                Assinantes RAMA BUSINESS podem contratar escritórios, salas de
                reunião, sala rotativa compartilhada, espaço coworking e de
                eventos corporativos sob demanda. Oferecemos a empresários,
                representantes comerciais e empreendedores escritório virtual,
                permitindo que tenham um endereço comercial e fiscal garantindo
                maior credibilidade ao seu negócio.
              </p>
              <p>
                Prezamos pela interação entre pessoas e negócios, por isso
                buscamos as melhores soluções para você e sua equipe
                trabalharem, para o seu negócio crescer e para a nossa
                comunidade se integrar.
              </p>
              <p>Aproveite dessa experiência conosco.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
