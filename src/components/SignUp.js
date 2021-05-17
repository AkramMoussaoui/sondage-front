import { Form, Input, Button, Spin } from "antd";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const reponse = await axios.post(
        "https://soudage.herokuapp.com/user",
        values
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      {loading ? (
        <Spin />
      ) : (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Nom"
            name="nom"
            rules={[
              {
                required: true,
                message: "Please input your nom!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Prenom"
            name="prenom"
            rules={[
              {
                required: true,
                message: "Please input your prenom!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default SignUp;
