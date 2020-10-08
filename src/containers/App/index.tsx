import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Layout from "../Layout";

import "./App.css";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import PostsPage from "../PostsPage";
import PostDetailPage from "../PostDetailPage";
import NotFoundPage from "../NotFoundPage";

import { RequestAuthAction } from "../LoginPage/actions";
import { makeSelectLoggedIn } from "../LoginPage/selectors";
import { makeSelectLocation } from "../../store/selectors/router.selectors";

function RouteWithLayout({
  layout: Layout,
  component: Component,
  rules,
  exact,
  path,
  ...rest
}: any) {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWithLayout.propTypes = {
  layout: PropTypes.any,
  component: PropTypes.any,
  rules: PropTypes.array,
  exact: PropTypes.any,
  path: PropTypes.any,
  breadcrumbs: PropTypes.any,
};

function RouteToLogin({ layout, component, path, loggedIn }: any) {
  return (
    <Route
      path={path}
      render={(props) =>
        !loggedIn ? (
          React.createElement(component, props)
        ) : (
          <Redirect to="/posts" />
        )
      }
    />
  );
}

RouteToLogin.propTypes = {
  layout: PropTypes.any,
  path: PropTypes.any,
  component: PropTypes.any,
  loggedIn: PropTypes.bool,
};

function App({ onLoadPage, rules, loggedIn, location }: any) {
  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <RouteToLogin path="/login" loggedIn={loggedIn} component={LoginPage} />

        {/* <RouteWithLayout
          layout={Layout}
          rules={rules}
          exact
          component={HomePage}
          path="/"
        /> */}

        <RouteWithLayout
          layout={Layout}
          rules={rules}
          component={PostDetailPage}
          path="/posts/:postId"
        />

        <RouteWithLayout
          layout={Layout}
          rules={rules}
          component={PostsPage}
          path="/posts"
        />
        <RouteWithLayout layout={Layout} component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  onLoadPage: PropTypes.func,
  rules: PropTypes.array,
  loggedIn: PropTypes.bool,
  location: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    onLoadPage: () => dispatch(RequestAuthAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);
