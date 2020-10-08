import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { Layout, Menu, Breadcrumb } from "antd";
import Logo from "../../components/Logo";

const { Header, Content, Footer, Sider } = Layout;

export function AppLayout({
  children,
  location,
  profile,
  breadcrumbs,
  signOutFunc,
}: any) {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Logo />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/posts"]}>
          {/* <Menu.Item key="/home">
            <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
              <span>Главная</span>
            </NavLink>
          </Menu.Item> */}
          <Menu.Item key="/posts">
            <NavLink
              to="/posts"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Блог</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200, position: "relative",minHeight: "100vh", }}
      >
        <Header
          style={{
            background: "#fff",
            padding: 0,
            boxShadow: "0 1px 4px rgba(0,21,41,.08)",
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            marginLeft: 200,
            zIndex: 1000,
          }}
        ></Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            position: "relative",
            marginTop: "88px",
          }}
        >
          <div
            className="site-layout-background"
            style={{}}
          >
            {children}
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
  signOutFunc: PropTypes.func,
  profile: PropTypes.object,
  breadcrumbs: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch: any) {
  return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AppLayout);
