"use server";

import { DATABASE_ID, WORKSPACE_ID } from "@/shared/utils/constants";
import { Workspace } from "@/shared/lib/types";
import { createSessionClient } from "@/shared/lib/appwrite";

interface GetWorkspaceInfoProps {
  workspaceId: string;
}

export const getWorkspaceInfo = async ({
  workspaceId,
}: GetWorkspaceInfoProps) => {
  try {
    const { databases } = await createSessionClient();

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACE_ID,
      workspaceId
    );

    return {
      name: workspace.name,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
