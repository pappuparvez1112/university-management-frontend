"use client";

import Form from "@/components/forms/Form";
import FormSelectField from "@/components/forms/FormSelectFields";
import FormYearPicker from "@/components/forms/FormYearPicker";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { monthOptions } from "@/constants/global";
import { useAddAcademicSemesterMutation } from "@/redux/api/academic/semestersApi";

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

const CreateACSemesterPage = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  console.log(useAddAcademicSemesterMutation);

  const onSubmit = async (data: any) => {
    if (data?.title == "Autumn") data["code"] = "01";
    else if (data?.title == "Summer") data["code"] = "02";
    else data["code"] = "03";

    data.year = parseInt(data.year);

    console.log(data);

    message.loading("Creating.....");
    try {
      const res = await addAcademicSemester(data);
      console.log(res);
      if (!!res) {
        message.success("Academic Semester Created successfully");
      }
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
          { label: "academic", link: `/${base}/academic` },
          { label: "semester", link: `/${base}/academic/semesters` },
        ]}
      />
      <h1>Create Academic Semester</h1>
      <Form submitHandler={onSubmit}>
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

export default CreateACSemesterPage;
