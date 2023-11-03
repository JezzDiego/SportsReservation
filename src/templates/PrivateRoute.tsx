"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isPublicRoute } from "@/functions/route";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  const routeName = usePathname();
  const isPublic = isPublicRoute(routeName);
  const isUserAuthenticated = true;

  useEffect(() => {
    if (!isUserAuthenticated && !isPublic) {
      push("/login");
    }
  }, [isUserAuthenticated, isPublic]);

  return (
    <>
      {!isUserAuthenticated && !isPublic && null}
      {(isUserAuthenticated || isPublic) && children}
    </>
  );
}
