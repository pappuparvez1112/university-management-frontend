"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDprops = {
  params: any;
};
const EditDepartmentPage = ({ params }: IDprops) => {
  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);
  console.log(data);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      await updateDepartment({ id, body: values });
      console.log(data);

      message.success("Department updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    title: data?.title || "",
  };
  console.log(defaultValues);
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />
      <ActionBar title="Update department"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
