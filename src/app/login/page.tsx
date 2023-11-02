import AccountCard from "@/components/custom/AccountCard";
import ShowPassword from "@/components/custom/AccountCard/PasswordInput";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <AccountCard
      title="Login"
      description="Faça o login com a sua conta para fazer um agendamento."
      footer={<Footer />}
    >
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Digite seu email" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <ShowPassword id="password" placeholder="Digite sua senha" />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-4">
        <CardDescription>
          Ainda não tenha uma conta?{" "}
          <a className="underline" href="/register">
            Registre-se
          </a>
        </CardDescription>
      </div>
    </AccountCard>
  );
}

const Footer = () => <Button>Entrar</Button>;
