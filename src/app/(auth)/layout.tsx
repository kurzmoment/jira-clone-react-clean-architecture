"use client";

import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathName = usePathname();
  const isSignIn = pathName === "/sign-in";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="./logo/logo.svg" width={152} height={56} alt="Logo" />
          <Button asChild variant={"secondary"}>
            <Link href={isSignIn ? "/sign-up" : "sign-in"}>
              {isSignIn ? "Sign up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
