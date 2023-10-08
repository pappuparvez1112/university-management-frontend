"use client";
import LoginImage from "@/app/assets/Privacy policy-rafiki.png";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { loginSchema } from "@/schemas/login";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const router = useRouter();
  // console.log(isLoggedIn());
  const [userLogin] = useUserLoginMutation();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
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
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput name="id" type="text" size="large" label="User id" />
            </div>
            <div
              style={{
                margin: "15px 0",
                justifyContent: "space-between",
                display: "flex",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: 400,
                }}
              >
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
              </div>
              <div>
                <Button
                  style={{
                    width: 80,
                    marginTop: "17px",
                    height: "40px",
                  }}
                  onClick={() => setPasswordVisible((prevState) => !prevState)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </Button>
              </div>
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
