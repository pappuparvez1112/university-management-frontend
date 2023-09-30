"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadcrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
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

      <ActionBar title="Manage Student">
        <Link href="/super_admin/manage-student/create">
          <Button>Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudentPage;
