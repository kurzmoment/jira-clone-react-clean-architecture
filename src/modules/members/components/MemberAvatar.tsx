import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { cn } from "@/shared/lib/utils";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbackClassname?: string;
}

export const MemberAvatar = ({
  name,
  className,
  fallbackClassname,
}: MemberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-5 transition border border-neutral-300 rounded-full",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-neutral-200 font-medium flex text-neutral-500 items-center justify-center",
          fallbackClassname
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
