import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { EditWorkspaceForm } from "@/modules/workspaces/components/EditWorkspaceForm";
import { getWorkspace } from "@/modules/workspaces/services/loaders/get-workspace";
import { redirect } from "next/navigation";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  if (!initialValues) {
    redirect(`/${params.workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
