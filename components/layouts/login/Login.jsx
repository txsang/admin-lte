import React from 'react';
import cookie from 'react-cookie';
import {getUserInfo} from 'base/actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

class LoginLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
    // if (typeof cookie.load('accessToken') != 'undefined') {
    //   let User = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    //   console.log(User);
    //   this.props.history.push('/');
    // } else {
    //   this.props.history.push('/login');
    // }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className='wrap-login'>
        <div className="login-box">
          <div className="login-logo">
            <img className="login-img" src={require("assets/images/logo.png")} />
          </div>
          <div className="login-box-body">
            {childrenWithProps}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(LoginLayout));
