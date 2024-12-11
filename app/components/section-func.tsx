import { Button } from "@/components/ui/button";

function SectionFunc() {
  return (
    <section
      id="sobre"
      className=" dark:bg-transparent space-y-6 md:py-12 lg:py-12 md:max-w-[64rem] mb-10"
    >
        <div className="mx-auto flex flex-col items-center space-y-1 text-center">
        <h2 className="text-3xl font-black leading-[1.1] md:text-6xl">
          Investimento
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Simplifique sua rotina agora mesmo com o OrçarJá, você cria orçamentos profissionais em PDF de forma simples e rápida e os envia diretamente por e-mail aos seus clientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  border rounded-lg  gap-10 p-10 mx-6 items-center justify-center ">
        <div className="flex flex-col gap-6 items-center">

        <h3 className="text-xl font-bold sm:text-2xl">Oque esta incluso na assinatura ?</h3>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center">Envio de emails ilimitados</li>
                <li className="flex items-center">Armazenamento de orcamentos ilimitados</li>
                <li className="flex items-center">Gerar PDFs ilimitados</li>
                <li className="flex items-center">Cadastro de ate 100 servicos personalizados</li>
                <li className="flex items-center">Estatisticas de orcamentos enviados</li>
                <li className="flex items-center">Notificacoes personalizadas</li>
                
            </ul>


        </div>
        <div className="flex flex-col gap-4 text-center">
            <div className="space-y-2">
                <h4 className="font-bold"> 
                   
                    R$<span className="text-6xl font-bold text-primary">9,90</span>
                </h4>
                <h4 className="font-bold text-xl"> Assinatura mensal</h4>
                <div className="space-x-1">
            <Button>Criar minha conta agora</Button>
          </div>
            </div>

        </div>
      </div>
    </section>
  );
}
export default SectionFunc;
