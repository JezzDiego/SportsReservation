import AccountCard from "@/components/custom/AccountCard";
import PasswordInput from "@/components/custom/AccountCard/PasswordInput";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <AccountCard
      title="Criar conta"
      description="Crie uma conta para fazer os agendamentos."
      footer={<Footer />}
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Digite seu nome" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="code">Matrícula</Label>
            <Input
              className="remove-arrow"
              id="code"
              type="number"
              placeholder="Digite a matrícula do SIGAA"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Digite o email institucional" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <PasswordInput id="password" placeholder="Digite sua senha" />
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="retype-password">Senha</Label>
            <div className="relative">
              <PasswordInput
                id="retype-password"
                placeholder="Confirme sua senha"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-4">
        <CardDescription>
          Já tem uma conta?{" "}
          <a className="underline" href="/login">
            Login
          </a>
        </CardDescription>
      </div>
    </AccountCard>
  );
}

const Footer = () => <Button>Cadastar</Button>;
