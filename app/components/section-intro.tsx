import { Button } from "@/components/ui/button";
import { ModeToggle } from "./select-theme";

function SectionIntro(){
    return (
        <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-16 relative md:max-w-[64rem]">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="rounded-2xl bg-muted px-4 py-2 text-sm flex items-center">
            Escolha seu tema
            <ModeToggle />
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl p-5 prose-2xl font-black">
            Criar e enviar orçamentos em PDF nunca foi tão rápido e fácil.
          </h1>

          
          <div className="space-x-4">
            <Button>Criar minha conta agora</Button>
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


    )
}
export default SectionIntro;