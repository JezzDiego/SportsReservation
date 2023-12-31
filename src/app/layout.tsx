import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import ToggleTheme from "@/components/custom/Theme/ToggleTheme";
import PrivateRoute from "@/templates/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="m-6">
            <ToggleTheme />
            <PrivateRoute>{children}</PrivateRoute>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
