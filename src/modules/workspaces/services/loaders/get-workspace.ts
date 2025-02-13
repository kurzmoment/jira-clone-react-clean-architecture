"use server";

import { DATABASE_ID, WORKSPACE_ID } from "@/shared/utils/constants";
import { getMemeber } from "../../../auth/services/loaders/get-member";
import { Workspace } from "@/shared/lib/types";
import { createSessionClient } from "@/shared/lib/appwrite";

interface GetWorkspaceProps {
  workspaceId: string;
}

export const getWorkspace = async ({ workspaceId }: GetWorkspaceProps) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const member = await getMemeber({
      databases,
      userId: user.$id,
      workspaceId,
    });

    if (!member) {
      return null;
    }

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACE_ID,
      workspaceId
    );

    return workspace;
  } catch (error) {
    console.error(error);
    return null;
  }
};
