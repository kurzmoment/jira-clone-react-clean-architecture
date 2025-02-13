import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./Navigation";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { DottedSeparator } from "../ui/dotted-separator";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src={"/logo/logo.svg"} alt="Logo" width={164} height={48} />
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
