import AccountCard from "@/components/custom/AccountCard";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  return (
    <AccountCard
      title="Recuperar senha"
      description="Confirme os dados para recuperar a senha."
      footer={<Footer />}
    >
      <form>
        <div className="grid w-full items-center gap-4">
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

const Footer = () => (
  <>
    <Button variant="outline">Tentar outra maneira</Button>
    <Button>Próximo</Button>
  </>
);
