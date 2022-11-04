import { Icon } from "@iconify/react";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icons: <Icon icon="ant-design:home-filled" width={20} height={20} />,
    cName: "menu-item",
  },
  {
    title: " Repositories",
    path: "/repos",
    icons: <Icon icon="mdi:source-repository" width={24} height={24} />,
    cName: "menu-item",
  },
];
