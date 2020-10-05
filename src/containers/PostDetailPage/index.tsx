import React, { useEffect } from "react";
import { Button, PageHeader, Descriptions, Space } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import history from "../../utils/history";

import {
  makeSelectPost,
  makeSelectLoading,
  makeSelectError,
} from "./selectors";


import { makeSelectTagsAsArray } from '../TagsContainer/selectors';

import {
  clearPostAction,
  updatePostAction,
  deletePostAction,
  createPostAction,
  getPostAction,
} from "./actions";

import styled from "styled-components";

import PostForm from "../../components/PostForm";
import Tags from "../../containers/TagsContainer";

const Wrapper = styled.div``

const PageBody = styled.div`
  padding-top: 20px;
  display: flex;
`

const routes = [
  {
    path: "/posts",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

function PostDetailPage({
  post,
  tags,
  match,
  getPost,
  updatePost,
  createPost,
  deletePost,
  loading,
  error,
}: any) {
  useEffect(() => {
    getPost(postId);
  }, []);

  const { postId } = match.params;

  const handlePostFormSubmit = (e) => {
    if (postId !== "new") {
      updatePost(postId, e);
    } else {
      createPost(e);
    }
  };

  const handlePostDelete = (e) => {
    deletePost(e);
  };

  const handlePostFormCancel = (e) => {
    history.push("/posts")
  };

  return (
    <Wrapper>
      <PageHeader
        ghost={false}
        // breadcrumb={{ routes }}
        onBack={() => history.push("/posts")}
        title={post ? post.title : null}
        extra={[]}
      >
        <Descriptions size="small" column={3}>
          {/* <Descriptions.Item label="Всего постов">{total}</Descriptions.Item> */}
        </Descriptions>
      </PageHeader>
      <PageBody>
        <PostForm
          loading={loading}
          error={error}
          item={post}
          tags={tags}
          onSubmit={handlePostFormSubmit}
          onCancel={handlePostFormCancel}
        />
        <Tags />
      </PageBody>
    </Wrapper>
  );
}

PostDetailPage.propTypes = {
  getPost: PropTypes.func,
  match: PropTypes.any,
  post: PropTypes.any,
  tags: PropTypes.array,
  loading: PropTypes.bool,
  updatePost: PropTypes.func,
  createPost: PropTypes.func,
  deletePost: PropTypes.func,
  error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
  tags: makeSelectTagsAsArray(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPost: (id: string) => {
      dispatch(clearPostAction());
      if (id !== "new") dispatch(getPostAction(id));
    },
    updatePost: (id, post) => dispatch(updatePostAction(id, post)),
    createPost: (post) => dispatch(createPostAction(post)),
    deletePost: (id) => dispatch(deletePostAction(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PostDetailPage);
