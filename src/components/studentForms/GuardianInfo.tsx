import { Col, Row } from "antd";
import FormInput from "../forms/FormInput";

const GuardianInfo = () => {
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
            name="student.guardian.fatherName"
            size="large"
            label="Father Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.fatherOccupation"
            size="large"
            label="Father Occupation"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.fatherContactNo"
            size="large"
            label="Father ContactNo"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.motherName"
            size="large"
            label="Mother Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.motherOccupation"
            size="large"
            label="Mother Occupation"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.motherContactNo"
            size="large"
            label="Mother ContactNo"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default GuardianInfo;
