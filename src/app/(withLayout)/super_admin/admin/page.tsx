"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadcrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadcrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />

      <ActionBar title="Admin list">
        <Link href="/super_admin/admin/create">
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdminPage;
