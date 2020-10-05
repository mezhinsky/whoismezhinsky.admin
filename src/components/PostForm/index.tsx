import React, { useRef, useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import BraftEditor from "braft-editor";
import CodeHighlighter from "braft-extensions/dist/code-highlighter";
import "prismjs/components/prism-java";

const Wrapper = styled.div`
  padding-top: 20px;
  background-color: white;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  button {
    margin-left: 15px;
  }
`;

const options = {
  syntaxs: [
    {
      name: "JavaScript",
      syntax: "javascript",
    },
    {
      name: "HTML",
      syntax: "html",
    },
    {
      name: "CSS",
      syntax: " css",
    },
    {
      name: "Java",
      syntax: "java",
    },
    {
      name: "PHP",
      syntax: "php",
    },
  ],
};

BraftEditor.use(CodeHighlighter(options));
BraftEditor.use(
  CodeHighlighter({
    includeEditors: ["editor-1"],
  })
);

function useDidUpdate(callback, deps?) {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
}

function PostForm({ item, tags, loading, error, onSubmit, onCancel }) {
  const [form] = Form.useForm();

  const patchForm = (item: any) => {
    if (item) {
      form.setFieldsValue({
        title: item.title,
        slug: item.slug,
        description: item.description,
        content: item.content,
      });
    }
  };
  useDidUpdate(() => {
    patchForm(item);
    if (item) {
      form.setFieldsValue({
        content: BraftEditor.createEditorState(item.content),
      });
    }
  });

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14, offset: 6 },
  };

  const onFinish = (values) => {
    if (typeof onSubmit === "function") {
      form.validateFields().then((values) => {
        values.content = values.content.toHTML();
        onSubmit(values);
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    if (typeof onCancel === "function") {
      onCancel();
    }
  };

  const controls: any[] = [
    "bold",
    "italic",
    "underline",
    "text-color",
    "separator",
    "link",
    "separator",
    "media",
  ];

  return (
    <Wrapper>
      <Form
        form={form}
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Заголовок"
          name="title"
          rules={[{ required: true, message: "Please input title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="URL"
          name="slug"
          rules={[{ required: false, message: "Please input slug" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: false, message: "Please input description" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Контент"
          name="content"
          rules={[{ required: false, message: "Please input description" }]}
        >
          <BraftEditor
            id="editor-1"
            language="en"
            className="my-editor, ant-input"
            placeholder="content"
          />
        </Form.Item>

        <Form.Item
          label="Тэги"
          name="tags"
          rules={[{ required: false, message: "Please input description" }]}
        >
          <Select
            defaultValue={item ? item.tags : []}
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {tags ? tags.map((tag, index) => {
              return (
                <Select.Option key={tag.id} value={tag.id}>
                  {tag.name}
                </Select.Option>
              );
            }) : null }
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Buttons>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={cancelHandler}>Cancel</Button>
          </Buttons>
        </Form.Item>
      </Form>
    </Wrapper>
  );
}

PostForm.propTypes = {
  form: PropTypes.any,
  tags: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.any,
  item: PropTypes.object,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default PostForm;
