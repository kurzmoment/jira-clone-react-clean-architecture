"use server";

import { createSessionClient } from "@/shared/lib/appwrite";
import {
  DATABASE_ID,
  MEMBERS_ID,
  WORKSPACE_ID,
} from "@/shared/utils/constants";
import { Query } from "node-appwrite";

export const getWorkspaces = async () => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      Query.equal("userId", user.$id),
    ]);

    if (members.total === 0) {
      return { documents: [], total: 0 };
    }

    const workspaceId = members.documents.map((member) => member.workspaceId);

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACE_ID,
      [Query.orderDesc("$createdAt"), Query.contains("$id", workspaceId)]
    );

    return workspaces;
  } catch (error) {
    console.error(error);
    return { documents: [], total: 0 };
  }
};
