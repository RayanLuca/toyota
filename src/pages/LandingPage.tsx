import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, ChevronRight, Shield, Clock, CreditCard } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-toyota-red/10 via-background to-background" />
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full toyota-gradient flex items-center justify-center">
              <Car className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Toyota Tracker</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Entrar
            </Button>
            <Button onClick={() => navigate("/cadastro")}>
              Cadastre-se
            </Button>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Acompanhe seu veículo
            <br />
            <span className="text-toyota-red">do pedido à retirada</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Tenha controle total sobre cada etapa da produção do seu Toyota.
            Financiamento, agendamento e muito mais em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" onClick={() => navigate("/cadastro")}>
              Começar agora
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base" onClick={() => navigate("/login")}>
              Já tenho conta
            </Button>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Tudo que você precisa
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Car,
              title: "Rastreio em tempo real",
              description: "Acompanhe cada etapa da produção do seu veículo com atualizações detalhadas.",
            },
            {
              icon: CreditCard,
              title: "Simulação de financiamento",
              description: "Visualize parcelas, taxas e condições de pagamento de forma clara e transparente.",
            },
            {
              icon: Clock,
              title: "Agendamento fácil",
              description: "Escolha a melhor data e horário para retirar seu veículo na concessionária.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-toyota-red/30"
            >
              <div className="w-12 h-12 rounded-xl toyota-gradient flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-2xl toyota-gradient p-10 md:p-16 text-center">
          <Shield className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Segurança e transparência
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Seus dados protegidos e todas as informações do seu veículo ao alcance de um clique.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base"
            onClick={() => navigate("/cadastro")}
          >
            Criar minha conta
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Toyota Tracker. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default LandingPage;
