"use client";

import { ResponsiveModal } from "@/shared/components/ui/responsive-modal";
import { CreateWorkspaceForm } from "./CreateWorkspaceForm";
import { useCreateWorkspaceModal } from "@/modules/workspaces/hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen } = useCreateWorkspaceModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  );
};
