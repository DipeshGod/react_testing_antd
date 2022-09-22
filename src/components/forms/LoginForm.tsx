import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

const LoginForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
    });
    const data = await response.json();
    setMessage(data.data.msg);
    setDisabled(false);
  };

  const onFinish = (values: any) => {
    setDisabled(true);
    handleSubmit();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
          { min: 5, max: 20, message: "Username must be 5-20 characters long" },
        ]}
      >
        <Input data-testid="user_name" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateFirst={true}
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 8, message: "Password must be at least 8 characters long" },
          {
            pattern: new RegExp(
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
            ),
            message:
              "Make sure to have one number, one capital letter and one special symbol",
          },
        ]}
      >
        <Input.Password data-testid="password" />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          disabled={disabled}
          data-testid="submit_btn"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
      {message.length > 0 && <div data-testid="msg">{message}</div>}
    </Form>
  );
};

export default LoginForm;
