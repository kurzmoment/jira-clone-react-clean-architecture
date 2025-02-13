import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { JoinWorkspaceForm } from "@/modules/workspaces/components/JoinWorkspaceForm";
import { getWorkspaceInfo } from "@/modules/workspaces/services/loaders/get-workspace-info";
import { redirect } from "next/navigation";

interface WorkspaceJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceJoinPage = async ({ params }: WorkspaceJoinPageProps) => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) redirect("/");

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceJoinPage;
