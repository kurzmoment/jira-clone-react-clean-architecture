import { getCurrent } from "@/modules/auth/services/loaders/get-current";
import { redirect } from "next/navigation";

export const WorkSpaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div>
      <h1>Workspace Id</h1>
    </div>
  );
};

export default WorkSpaceIdPage;
