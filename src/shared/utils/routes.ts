import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { SettingsIcon, Users } from "lucide-react";

export const routes = [
  {
    label: "Home",
    href: "",
    icon: GoHome,
    activeIcons: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcons: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcons: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: Users,
    activeIcons: Users,
  },
];
