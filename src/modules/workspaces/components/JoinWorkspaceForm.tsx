"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { DottedSeparator } from "@/shared/components/ui/dotted-separator";
import { useInviteCode } from "@/modules/workspaces/hooks/use-invite-code";
import { useWorkspaceId } from "@/modules/workspaces/hooks/use-workspace-id";
import { useJoinWorkspace } from "@/modules/workspaces/services/actions/use-join-workspace";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useJoinWorkspace();
  const inviteCode = useInviteCode();

  const onSubmit = () => {
    mutate(
      {
        param: {
          workspaceId,
        },
        json: {
          code: inviteCode,
        },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{initialValues.name}</strong>{" "}
          the workspace. Please enter the code to join.
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="flex gap-2 flex-col lg:flex-row items-center justify-between">
          <Button
            className="w-full lg:w-fit"
            variant={"secondary"}
            type="button"
            asChild
            size={"lg"}
            disabled={isPending}
          >
            <Link href={"/"}>Cancel</Link>
          </Button>
          <Button
            className="w-full lg:w-fit"
            size={"lg"}
            type="button"
            onClick={onSubmit}
            disabled={isPending}
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
