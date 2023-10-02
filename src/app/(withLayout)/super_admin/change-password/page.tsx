"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Space, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const ResetPasswordPage = () => {
  const router = useRouter();
  // console.log(isLoggedIn());
  const [userLogin] = useUserLoginMutation();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("Password reset successfully");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
      <Form submitHandler={onSubmit}>
        <h1>Reset password</h1>
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
              label="Old password"
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
              label="New password"
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
  );
};

export default ResetPasswordPage;
