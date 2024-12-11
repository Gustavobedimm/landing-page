function SectionSobre() {
  return (
    <section id="sobre" className="space-y-6 py-12 md:max-w-[64rem]">
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-black leading-[1.1] md:text-6xl">
          Funcionalidades
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Simplifique sua rotina agora mesmo com o OrçarJá, você cria orçamentos
          profissionais em PDF de forma simples e rápida e os envia diretamente
          por e-mail aos seus clientes.
        </p>
      </div>

      <div className="mx-8 grid justify-center gap-4 grid-cols-1 md:grid-cols-3">

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Envio de emails</h3>
              <p className="text-sm text-muted-foreground">Crie o orçamento pela plataforma e envie para o seu cliente diretamente por e-mail.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Gera orçamento em PDF</h3>
              <p className="text-sm text-muted-foreground">Também é possivel gerar o PDF do orçamento e baixalo para ser enviado por outros meios.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Retorno de visulização de Email</h3>
              <p className="text-sm text-muted-foreground">Após o cliente visualizar o orçamento que foi enviado por email você sera notificado.</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Estatisticas de envio de Email</h3>
              <p className="text-sm text-muted-foreground">Painel com estatisticas dos emails enviados</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Campos personalizados por segmentos</h3>
              <p className="text-sm text-muted-foreground">Cada segmento tem suas particularidades, sendo possivel cadastrar campos personalizados para cada segmento.</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex  flex-col justify-between rounded-md p-6">
            <div className="space-y-2">
              <h3 className="font-bold">Cadastro de serviços personalizados</h3>
              <p className="text-sm text-muted-foreground">É possivel cadastrar serviços personalizados para cada segmento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionSobre;
