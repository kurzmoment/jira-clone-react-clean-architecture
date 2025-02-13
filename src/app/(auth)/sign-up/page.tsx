import { SignUpCard } from "@/modules/auth/components/SignUpCard";
import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { redirect } from "next/navigation";

export default async function SingUpPage() {
  const user = await getCurrent();

  if (user) return redirect("/");
  return <SignUpCard />;
}
