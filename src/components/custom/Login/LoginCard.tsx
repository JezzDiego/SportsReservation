import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShowPassword from "../Shared/ShowPassword";

export default function LoginCard() {
  return (
    <Card className="max-w-[350px] min-w-[272px] m-auto">
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
                <ShowPassword />
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Entrar</Button>
      </CardFooter>
    </Card>
  );
}
