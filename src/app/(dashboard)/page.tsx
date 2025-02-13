import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { getWorkspaces } from "@/modules/workspaces/services/loaders/get-workspaces";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  const workspaces = await getWorkspaces();
  if (workspaces.total === 0) {
    redirect("/workspaces/create");
  } else {
    redirect(`/workspaces/${workspaces.documents[0].$id}`);
  }

  return <div>Homepage</div>;
}
