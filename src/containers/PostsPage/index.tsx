/**
 *
 * PostsPage
 *
 */

import React, { useEffect } from "react";
import { Button, Pagination, PageHeader, Descriptions } from "antd";
import queryString from "query-string";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import history from "../../utils/history";
import {
  makeSelectPosts,
  makeSelectIds,
  makeSelectPostsAsArray,
  makeSelectLoading,
  makeSelectError,
  makeSelectPage,
  makeSelectTotal,
  makeSelectSize,
} from "../../containers/PostsPage/selectors";

import { getPostsAction, setPostsPageAction, deletePostAction } from "./actions";

import PostTable from "../../components/PostTable";

const routes = [
  {
    path: "index",
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

export function PostsPage({
  location,
  pageSize,
  onPageLoad,
  onPostDelete,

  posts,
  ids,
  loading,
  error,
  page,
  total,
}: any) {
  useEffect(() => {
    onPageLoad(query.page);
  }, []);

  const createNewPost = () => {
    history.push("/posts/new");
  };

  const onDelete = (id) => {
    onPostDelete(id);
  }

  const query = queryString.parse(location.search);

  const onShowSizeChange = (current: any, pageSize: any) => {
    console.log(current, pageSize);
  };

  const onPagitationChange = (page: any, pageSize: any) => {
    onPageLoad(page);
  };

  return (
    <div>
      {/* <Helmet>
        <title>Посты</title>
        <meta name="description" content="Description of UsersPage" />
      </Helmet> */}
      <PageHeader
        ghost={false}
        // breadcrumb={{ routes }}
        title="Блог"
        extra={[
          <Button onClick={createNewPost} type="dashed" key="1">
            Создать пост
          </Button>,
        ]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Всего постов">{total}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <PostTable ids={ids} posts={posts} loading={loading} error={error} onDelete={onDelete} />
      <Pagination
        style={{ margin: "10px 0" }}
        size="small"
        showSizeChanger={false}
        responsive
        onShowSizeChange={onShowSizeChange}
        onChange={onPagitationChange}
        defaultCurrent={Number(page)}
        current={Number(page)}
        defaultPageSize={pageSize}
        total={total}
      />
    </div>
  );
}

PostsPage.propTypes = {
  posts: PropTypes.any,
  ids: PropTypes.array,
  loading: PropTypes.any,
  error: PropTypes.any,
  pageSize: PropTypes.any,
  page: PropTypes.any,
  total: PropTypes.any,
  loadPosts: PropTypes.func,
  onPageLoad: PropTypes.func,
  onPostDelete: PropTypes.func,
  location: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPostsAsArray(),
  ids: makeSelectIds(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  pageSize: makeSelectSize(),
  page: makeSelectPage(),
  total: makeSelectTotal(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    loadPosts: (evt: any) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getPostsAction());
    },
    onPageLoad: (page: any) => {
      dispatch(setPostsPageAction(page ? page : 1));
      let url = page ?  `/posts?page=${page}` :  `/posts`
      history.push(url);
    },
    onPostDelete: (id: string) => {
      dispatch(deletePostAction(id));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PostsPage);
