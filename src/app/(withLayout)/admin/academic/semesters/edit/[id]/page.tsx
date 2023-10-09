"use client";
import Form from "@/components/forms/Form";
import FormSelectField from "@/components/forms/FormSelectFields";
import FormYearPicker from "@/components/forms/FormYearPicker";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { monthOptions } from "@/constants/global";
import {
  useAcademicSemesterQuery,
  useUpdateAcademicSemesterMutation,
} from "@/redux/api/academic/semestersApi";
import { Button, Col, Row, message } from "antd";

const semesterOptions = [
  {
    label: "Autumn",
    value: "Autumn",
  },
  {
    label: "Summer",
    value: "Summer",
  },
  {
    label: "Fall",
    value: "Fall",
  },
];
type IDprops = {
  params: any;
};
const EditAcademicSemestersPage = ({ params }: IDprops) => {
  const { id } = params;
  const { data, isLoading } = useAcademicSemesterQuery(id);
  console.log(data);
  const [updateAcademicSemester] = useUpdateAcademicSemesterMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      await updateAcademicSemester({ id, body: values });
      console.log(data);

      message.success("AcademicSemester updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const defaultValues = {
    title: data?.title || "",
    startMonth: data?.startMonth || "",
    endMonth: data?.endMonth || "",
    year: data?.year,
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
            link: "/admin/academic/semesters",
          },
        ]}
      />
      <ActionBar title="Update Academic SSemesters"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0" }}>
              <FormSelectField
                size="large"
                name="title"
                options={semesterOptions}
                label="Title"
                placeholder="Select"
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormSelectField
                size="large"
                name="startMonth"
                options={monthOptions}
                label="Start Month"
                placeholder="Select"
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormSelectField
                size="large"
                name="endMonth"
                options={monthOptions}
                label="End Month"
                placeholder="Select"
              />
            </div>
            <div style={{ margin: "10px 0" }}>
              <FormYearPicker name="year" label="Year" picker="year" />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default EditAcademicSemestersPage;
