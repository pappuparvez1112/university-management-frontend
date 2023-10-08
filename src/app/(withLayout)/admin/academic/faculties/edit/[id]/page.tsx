"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicFacultyQuery,
  useUpdateAcademicFacultyMutation,
} from "@/redux/api/academic/facultiesApi";
import { Button, Col, Row, message } from "antd";

type IDprops = {
  params: any;
};
const EditAcademicFacultyPage = ({ params }: IDprops) => {
  const { id } = params;
  const { data, isLoading } = useAcademicFacultyQuery(id);
  console.log(data);
  const [updateAcademicFaculty] = useUpdateAcademicFacultyMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      await updateAcademicFaculty({ id, body: values });
      console.log(data);

      message.success("AcademicFaculty updated successfully");
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
            label: "admin",
            link: "/admin",
          },
          {
            label: "Academic Faculty",
            link: "/admin/academic/faculties",
          },
        ]}
      />
      <ActionBar title="Update Academic faculties"></ActionBar>
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

export default EditAcademicFacultyPage;
