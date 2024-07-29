import { OurClientsCard } from './ourClientsCard';

export const OurClientsContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-24 py-10">
      <label className="section-title">
        Conheça as empresas presentes em nosso espaço
      </label>
      <div className="flex flex-col md:flex-row gap-4">
        <OurClientsCard
          imageUrl="/logojup.png"
          imageAlt="Logo JottaUp"
          redirectUrl="https://jottaup.com.br/"
        >
          JottaUp <br />
          Digital Marketing
        </OurClientsCard>
        <OurClientsCard
          imageUrl="/ar3.png"
          imageAlt="Logo AR3 Advocacia"
          redirectUrl="#"
        >
          AR3
          <br />
          Assessoria e Consultoria Jurídica
        </OurClientsCard>
      </div>
    </div>
  );
};
