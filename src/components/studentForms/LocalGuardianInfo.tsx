import { Col, Row } from "antd";
import FormInput from "../forms/FormInput";

const LocalGuardianInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginBottom: "10px" }}
      >
        <Col className="gutter-row" span={6}>
          <FormInput
            type="text"
            name="student.localGuardian.name"
            size="large"
            label="Name"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <FormInput
            type="text"
            name="student.localGuardian.occupation"
            size="large"
            label="Occupation"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <FormInput
            type="text"
            name="student.localGuardian.contactNo"
            size="large"
            label="Contact No"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <FormInput
            type="text"
            name="student.localGuardian.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LocalGuardianInfo;
