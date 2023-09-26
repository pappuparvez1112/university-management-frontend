import Contents from "@/components/ui/content";
import Sidebar from "@/components/ui/sidebar";
import { Layout } from "antd";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar></Sidebar>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashBoardLayout;
