import LoginPage from "@/components/login/login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "University Management Login",
};
const Login = () => {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
};

export default Login;
