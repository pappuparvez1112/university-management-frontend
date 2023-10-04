"use client";
import Contents from "@/components/ui/content";
import Sidebar from "@/components/ui/sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedin = isLoggedIn();
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!userLoggedin) {
  //     router.push("/login");
  //   }
  // }, [router, userLoggedin]);
  // if (!userLoggedin) {
  //   return <p>Loading.....</p>;
  // }
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedin) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedin]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashBoardLayout;
