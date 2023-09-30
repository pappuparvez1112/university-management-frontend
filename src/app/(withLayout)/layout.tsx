"use client";
import Contents from "@/components/ui/content";
import Sidebar from "@/components/ui/sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const userLoggedin = isLoggedIn();
  useEffect(() => {
    if (!userLoggedin) {
      router.push("/login");
    }
  }, [router, userLoggedin]);
  // if (!userLoggedin) {
  //   return <p>Loading.....</p>;
  // }

  return (
    <Layout hasSider>
      <Sidebar></Sidebar>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashBoardLayout;
