import PasswordInput from "@/components/custom/password-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginCard() {
  return (
    <Card className="max-w-[400px] min-w-[272px] m-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Faça o login com a sua conta para fazer um agendamento.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Digite seu email" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <PasswordInput id="password" placeholder="Digite sua senha" />
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
            <br />
            <a className="underline" href="/forgot-password">
              Esqueci minha senha
            </a>
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  );
}
