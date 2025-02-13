"use client";

import { cn } from "@/shared/lib/utils";
import { useWorkspaceId } from "@/modules/workspaces/hooks/use-workspace-id";
import { routes } from "@/shared/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const workspaceId = useWorkspaceId();
  const pathName = usePathname();
  return (
    <ul className="flex flex-col">
      {routes.map((route, index) => {
        const fullHref = `/workspaces/${workspaceId}${route.href}`;
        const isActive = pathName === fullHref;
        const Icon = isActive ? route.activeIcons : route.icon;
        return (
          <Link key={index} href={fullHref}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 round font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {route.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
