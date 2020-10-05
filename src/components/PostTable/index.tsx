import React from "react";
import PropTypes from "prop-types";
import { Table, Tag, Space, Menu, Dropdown } from "antd";
import { Popconfirm, message, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function PostTable({ posts, ids, loading, error, onDelete }) {
  const ItemDelete = (id) => {
    if (typeof onDelete === "function") {
      onDelete(id);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <NavLink to={`/posts/${id}`}>{id}</NavLink>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={`${tag.color}`} key={tag._id}>
                {tag.name.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "x",
      render: (id) => {
        return (
          <Popconfirm
            placement="left"
            title={"Точно удалить?"}
            onConfirm={() => ItemDelete(id)}
            okText="Да"
            cancelText="Нет"
          >
            <a target="_blank" rel="noopener noreferrer">
              Удалить
            </a>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={posts}
      loading={loading}
      pagination={false}
    />
  );
}

PostTable.propTypes = {
  posts: PropTypes.any,
  ids: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default PostTable;
