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
  makeSelectTags,
  makeSelectTagsAsArray,
  makeSelectLoading,
  makeSelectError,
} from "../../containers/TagsContainer/selectors";

import { getTagsAction, tagCreateAction, tagUpdateAction, tagDeleteAction } from "./actions";

import TagsList from "../../components/TagsList";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  margin-left: 20px;
  padding: 20px;

  .ant-tag {
    margin-bottom: 10px;
  }
`;

export function TagsContainer({
  loadTags,
  createTag,
  updateTag,
  deleteTag,

  tags,
  loading,
  error,
}: any) {
  useEffect(() => {
    loadTags();
  }, []);

  return (
    <Wrapper>
      <TagsList items={tags} onCreate={createTag} onUpdate={updateTag} onDelete={deleteTag} loading={loading} error={error}  />
    </Wrapper>
  );
}

TagsContainer.propTypes = {
  tags: PropTypes.any,
  loading: PropTypes.any,
  error: PropTypes.any,

  loadTags: PropTypes.func,
  createTag: PropTypes.func,
  updateTag: PropTypes.func,
  deleteTag: PropTypes.func,

  onTagDelete: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTagsAsArray(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    loadTags: (evt: any) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getTagsAction());
    },
    createTag: (tag) => {
      dispatch(tagCreateAction(tag));
    },
    updateTag: (index, tag) => {
      dispatch(tagUpdateAction(index,tag));
    },
    deleteTag: (tag) => {
      dispatch(tagDeleteAction(tag));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(TagsContainer);
