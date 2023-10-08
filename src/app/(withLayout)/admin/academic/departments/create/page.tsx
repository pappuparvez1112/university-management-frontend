"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/forms/FormSelectFields";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentsApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultiesApi";

import { Button, Col, Row, message } from "antd";

const CreateDepartmentsPage = () => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });
  const [addAcademicDepartment]: any = useAddAcademicDepartmentMutation();
  const academicFaculties = data?.academicFaculties;
  const academicFacultiesOptions = academicFaculties?.map((faculty) => {
    return {
      label: faculty?.title,
      value: faculty?.id,
    };
  });
  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      console.log(data);
      await addAcademicDepartment(data);
      message.success("AcademicDepartments created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          {
            label: "Academic Departments",
            link: `/${base}/academic/departments`,
          },
        ]}
      />
      <h1>Create Academic Department</h1>
      <Form submitHandler={onSubmit}>
        <Row
          style={{ display: "flex" }}
          gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}
        >
          <Col span={8} className="gutter-row">
            <FormInput name="title" label="Title" size="large" />
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

export default CreateDepartmentsPage;
