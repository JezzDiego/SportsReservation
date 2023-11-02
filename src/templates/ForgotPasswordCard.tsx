"use client";

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

export default function ForgotPasswordCard() {
  return (
    <Card className="max-w-[400px] min-w-[272px] m-auto">
      <CardHeader>
        <CardTitle>Recuperar senha</CardTitle>
        <CardDescription>
          Confirme os dados para recuperar a senha.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Tentar outra maneira</Button>
        <Button>Próximo</Button>
      </CardFooter>
    </Card>
  );
}
