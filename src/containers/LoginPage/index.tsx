import React, { useEffect } from "react";
// import queryString from 'query-string';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "antd";
// import { useHistory } from 'connected-react-router';
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import LoginForm from "../../components/LoginForm";

import { SocialSignInAction } from './actions';

// import history from 'utils/history';
// import {
//   makeSelectPosts,
//   makeSelectLoading,
//   makeSelectPageSize,
//   makeSelectTotal,
// } from './selectors';

import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: gray;
`;

const Or = styled.div`
  text-align: center;
  font-weight: 700;
  padding: 10px;
`;

const SocialLogin = styled.div`
	button {
		width: 100%;
	}
`;


export function LoginPage({ onSubmitForm, onSocialLogin, loading, error }) {
  useEffect(() => {}, []);

  const signedIn = (response) => {
    console.log(response)
    onSocialLogin('google', response.accessToken)
  };
  
  const signErr = (response) => {
    console.log(response)
  };

  return (
    <Wrapper>
      <Card title="Войти" bordered={false} style={{ width: 300 }}>
        <LoginForm />
        <Or>OR</Or>
        <SocialLogin>
          <GoogleLogin
            className="google-signIn-btn"
            clientId="853291641521-vn1372mpl4uh5idskmaepp44mv9e4rst.apps.googleusercontent.com"
            buttonText="Войти через google"
            onSuccess={signedIn}
            onFailure={signErr}
            cookiePolicy={"single_host_origin"}
          />
        </SocialLogin>
      </Card>
    </Wrapper>
  );
}

LoginPage.propTypes = {
  onSubmitForm: PropTypes.func,
  onSocialLogin: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  // posts: makeSelectPosts(),
  // loading: makeSelectLoading(),
  // total: makeSelectTotal(),
  // pageSize: makeSelectPageSize(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    onSubmitForm: (evt: any) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch();
    },
    onSocialLogin: (provider: string, token: string) => {
      dispatch(SocialSignInAction(provider, token));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LoginPage);
