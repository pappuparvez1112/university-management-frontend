import { Spin } from "antd";

const LoadingPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Spin size="large"></Spin>
      </div>
    </div>
  );
};

export default LoadingPage;
