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
import ShowPassword from "./PasswordInput";

type AccountCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export default function AccountCard({
  title,
  description,
  children,
  footer,
}: AccountCardProps) {
  return (
    <Card className="max-w-[400px] min-w-[272px] m-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between">{footer}</CardFooter>
    </Card>
  );
}
