import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Factory, ClipboardCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import corolla from "@/assets/corolla.png";

const DashboardPage = () => {
  const { user } = useAuth();

  // 🔥 DADOS MOCKADOS
  const item = {
    model: "Corolla Cross XRE 2025",
    imageUrl: "https://toyota.com.br/media/vehicles/corolla-cross.png"
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">
          Olá, {user?.name || "Usuário"} 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Acompanhe o status do seu veículo em tempo real.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="p-2 rounded-lg bg-accent">
              <Car className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Status do Veículo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Em Produção</p>
            <p className="text-sm text-muted-foreground mt-1">
              {item.model}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="p-2 rounded-lg bg-accent">
              <Factory className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Etapa Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Montagem</p>
            <div className="mt-2">
              <Progress value={50} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                50% concluído
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="p-2 rounded-lg bg-accent">
              <ClipboardCheck className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base">Próximas Ações</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              <li className="text-muted-foreground">• Pintura programada</li>
              <li className="text-muted-foreground">• Inspeção de qualidade</li>
              <li className="text-muted-foreground">• Liberação para retirada</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* CARD GRANDE */}
      <div className="flex justify-center">
        <div className="flex w-full shadow-2xl rounded-2xl overflow-hidden p-5 items-center">

          {/* ESQUERDA */}
          <div className="flex flex-col w-1/4">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              {user?.name || "Cliente"}
            </h2>

            <div className="border p-4 rounded-lg bg-gray-50 text-sm">
              <h3 className="font-semibold text-lg mb-2">Seu Veículo</h3>
              <p className="text-gray-700">{item.model}</p>
              <ul className="list-disc list-inside mt-2 text-gray-500">
                <li>Motorização híbrida</li>
                <li>Economia</li>
                <li>Segurança</li>
              </ul>
            </div>
          </div>

          {/* CENTRO */}
          <div className="w-1/2 flex justify-center">
            <img
              src={corolla}
              alt={item.model}
              className="max-h-72 object-contain"
            />
          </div>

          {/* DIREITA */}
          <div className="w-1/4 text-center">
            <p className="italic text-gray-700">
              "Revisar o carro novo é manter a garantia de fábrica e garantir a
              sua segurança a longo prazo."
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Toyota — Todos os direitos reservados
      </footer>

    </div>
  );
};

export default DashboardPage;