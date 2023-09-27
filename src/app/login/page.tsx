"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { Button, Col, Row, Space } from "antd";
import Image from "next/image";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import LoginImage from "../assets/Privacy policy-rafiki.png";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={LoginImage} width={500} alt="login image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User id" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <Space direction="horizontal">
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User password"
                  placeholder="input password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
                <Button
                  style={{
                    width: 80,
                    marginTop: "16px",
                    height: "39px",
                  }}
                  onClick={() => setPasswordVisible((prevState) => !prevState)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </Button>
              </Space>
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;