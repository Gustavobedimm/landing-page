import SectionIntro from "./components/section-intro";
import SectionSobre from "./components/section-sobre";
import SectionFunc from "./components/section-func";

export default function Home() {
  return (
    <main className=" flex flex-col items-center">
      
      <SectionIntro/>
      <SectionSobre/>
      <SectionFunc/>

    </main>
  );
}

// cadastro de serviços
//envio de orçamentos por email
//confirmação de leitura do email
//baixe o PDF e envie por onde quiser
//listagem de orçamentos enviados
//estatisticas de orçamentos enviados e valores gerados
