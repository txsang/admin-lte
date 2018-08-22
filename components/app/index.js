import React from 'react';
import { RenderRoutes } from 'base/routes';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import cookie from 'react-cookie';
import { getUserInfo } from 'base/actions';
import { Toastr } from 'components/modules/toastr';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <RenderRoutes routes={this.props.route.routes}/>
      </div>
    );
  }
}

App.defaultProps = {
  defaultPage: "/",
}

App.contextTypes = {
  router: React.PropTypes.object
};

export default connect()(withRouter(App));