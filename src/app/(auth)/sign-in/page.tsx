import { SignInCard } from "@/modules/auth/components/SignInCard";
import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { redirect } from "next/navigation";

export default async function SingInPage() {
  const user = await getCurrent();

  if (user) return redirect("/");

  return <SignInCard />;
}
