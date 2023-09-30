/* eslint-disable react-hooks/rules-of-hooks */
"use client";
const { Header, Content, Footer, Sider } = Layout;
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";

// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useState } from "react";

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }
// const items: MenuItem[] = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;
  console.log(role);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          paddingTop: "22px",
          paddingBottom: "16px",
        }}
      >
        PH-University
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
        style={{ paddingLeft: "10px" }}
      />
    </Sider>
  );
};

export default Sidebar;
