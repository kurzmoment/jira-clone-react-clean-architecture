import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { CreateWorkspaceForm } from "@/modules/workspaces/components/CreateWorkspaceForm";
import { redirect } from "next/navigation";

const WorkspaceCreatePage = async () => {
  const user = await getCurrent();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full lg:max-w-xl">
      <CreateWorkspaceForm />
    </div>
  );
};

export default WorkspaceCreatePage;
