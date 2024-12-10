import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/select-theme";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-16 relative">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="rounded-2xl bg-muted px-4 py-2 text-sm flex items-center">
            Escolha seu tema
            <ModeToggle />
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl p-5 prose-2xl font-black">
            Criar e enviar orçamentos em PDF nunca foi tão rápido e fácil.
            
          </h1>

          <p className="max-w-[25rem] md:max-w-[25rem] lg:max-w-[32rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Simplifique sua rotina agora mesmo com o OrçarJá, você cria orçamentos profissionais em PDF de forma
            simples e rápida, personaliza cada detalhe e os envia diretamente
            por e-mail aos seus clientes. Tudo isso em uma plataforma intuitiva
            e feita para quem valoriza agilidade e eficiência no dia a dia.{" "}
          </p>
          <div className="space-x-4">
            <Button>Assinar agora</Button>
          </div>
        </div>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/5 md:left-1/2 top-full md:top-1/2 lg:top-1/3 -z-10 size-[32rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </section>
      <section id="sobre"></section>
    </main>
  );
}


// cadastro de serviços
//envio de orçamentos por email
//confirmação de leitura do email
//baixe o PDF e envie por onde quiser
//listagem de orçamentos enviados
//estatisticas de orçamentos enviados e valores gerados

