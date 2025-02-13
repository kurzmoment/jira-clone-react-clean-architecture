import { useMedia } from "react-use";
import { Drawer, DrawerContent } from "./drawer";
import { Dialog, DialogContent } from "./dialog";

interface ResponsiveModalProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResponsiveModal({
  children,
  onOpenChange,
  open,
}: ResponsiveModalProps) {
  const isDektop = useMedia("(min-width: 1024px)", true);

  if (isDektop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
