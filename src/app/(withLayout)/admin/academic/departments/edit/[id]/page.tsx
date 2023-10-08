"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/forms/FormSelectFields";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useAcademicDepartmentQuery,
  useUpdateAcademicDepartmentMutation,
} from "@/redux/api/academic/departmentsApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultiesApi";
import { Button, Col, Row, message } from "antd";

type IDprops = {
  params: any;
};
const EditAcademicDepartmentPage = ({ params }: IDprops) => {
  const { id } = params;
  const { data, isLoading } = useAcademicDepartmentQuery(id);
  console.log(data);
  const [updateAcademicDepartment] = useUpdateAcademicDepartmentMutation();

  const { data: faculty, isLoading: facultyLoading } =
    useAcademicFacultiesQuery({
      limit: 100,
      page: 1,
    });

  const academicFaculties = faculty?.academicFaculties;
  const academicFacultiesOptions = academicFaculties?.map((faculty: any) => {
    return {
      label: faculty?.title,
      value: faculty?.id,
    };
  });

  const onSubmit = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      await updateAcademicDepartment({ id, body: values });
      console.log(data);

      message.success("Academic Department updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    title: data?.title || "",
  };
  const facultyDefaultValues = {
    title: data?.academicFaculty?.title || "",
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
            label: "Academic department",
            link: "/admin/academic/departments",
          },
        ]}
      />
      <ActionBar title="UpdateAcademic department"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col className="gutter-row" span={8}>
            <FormInput size="large" name="title" label="Title" />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              size="large"
              name="academicFacultyId"
              options={academicFacultiesOptions as SelectOptions[]}
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default EditAcademicDepartmentPage;
