import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;
const CredsForm = styled.div`
  .login-form-button {
    width: 100%;
  }
`;

function LoginForm({ onSubmit, loading, error }) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Wrapper>
      <CredsForm>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </CredsForm>
    </Wrapper>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default LoginForm;
