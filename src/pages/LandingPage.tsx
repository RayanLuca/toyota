import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, ChevronRight, Shield, Clock, CreditCard, Factory, MapPin, BarChart3, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-production.jpg";
import showroomImg from "@/assets/car-showroom.jpg";
import dashboardImg from "@/assets/dashboard-preview.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full toyota-gradient flex items-center justify-center">
              <Car className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">Toyota Tracker</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
              Entrar
            </Button>
            <Button size="sm" onClick={() => navigate("/cadastro")}>
              Cadastre-se
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Linha de produção Toyota"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-40 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-toyota-red/10 text-toyota-red border border-toyota-red/20 mb-6">
            Plataforma de Acompanhamento Veicular
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Acompanhe seu veículo
            <br />
            <span className="text-toyota-red">do pedido à retirada</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Uma plataforma completa para rastrear cada etapa da produção, simular financiamentos e agendar a retirada do seu Toyota.
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

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Como funciona</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Em poucos passos você tem controle total sobre a jornada do seu veículo.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", icon: CheckCircle2, title: "Crie sua conta", desc: "Cadastro rápido e seguro em poucos minutos." },
            { step: "02", icon: Factory, title: "Acompanhe a produção", desc: "Veja em tempo real cada etapa da fabricação." },
            { step: "03", icon: CreditCard, title: "Simule o financiamento", desc: "Compare taxas e condições de pagamento." },
            { step: "04", icon: MapPin, title: "Agende a retirada", desc: "Escolha data e horário na concessionária." },
          ].map((item) => (
            <div key={item.step} className="text-center group">
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:bg-toyota-red/10 transition-colors">
                <item.icon className="h-7 w-7 text-toyota-red" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full toyota-gradient text-[11px] font-bold text-primary-foreground flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature: Tracking */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-toyota-red uppercase tracking-wider">Rastreio Inteligente</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              Saiba exatamente onde está seu veículo
            </h2>
            <p className="text-muted-foreground mb-6">
              Acompanhe cada fase da produção com atualizações detalhadas: montagem, pintura, inspeção de qualidade, transporte e entrega na concessionária.
            </p>
            <ul className="space-y-3">
              {["Atualizações em tempo real", "Notificações por etapa", "Histórico completo de status", "Previsão de entrega"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-toyota-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <img src={dashboardImg} alt="Dashboard de rastreamento" loading="lazy" width={1280} height={720} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Feature: Showroom */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden border border-border shadow-lg">
            <img src={showroomImg} alt="Veículo no showroom" loading="lazy" width={1280} height={720} className="w-full h-auto" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold text-toyota-red uppercase tracking-wider">Financiamento</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              Simule e compare condições de pagamento
            </h2>
            <p className="text-muted-foreground mb-6">
              Ferramenta integrada para simular financiamentos com diferentes prazos, taxas e valores de entrada. Tudo de forma transparente e sem compromisso.
            </p>
            <ul className="space-y-3">
              {["Simulação instantânea", "Comparação de cenários", "Taxas atualizadas", "Sem burocracia"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-toyota-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Tudo que você precisa em um só lugar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Rastreio em tempo real", description: "Acompanhe cada etapa da produção do seu veículo." },
              { icon: CreditCard, title: "Simulação de financiamento", description: "Visualize parcelas, taxas e condições de pagamento." },
              { icon: Clock, title: "Agendamento fácil", description: "Escolha data e horário para retirar seu veículo." },
              { icon: BarChart3, title: "Dashboard completo", description: "Visão geral com todas as informações reunidas." },
              { icon: Shield, title: "Dados protegidos", description: "Segurança e criptografia em todas as operações." },
              { icon: Factory, title: "Status de produção", description: "Detalhes de cada fase da fabricação do veículo." },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-toyota-red/30"
              >
                <div className="w-11 h-11 rounded-xl toyota-gradient flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-2xl toyota-gradient p-10 md:p-16 text-center">
          <Shield className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Pronto para acompanhar seu Toyota?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Crie sua conta gratuitamente e tenha acesso a todas as funcionalidades da plataforma.
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
