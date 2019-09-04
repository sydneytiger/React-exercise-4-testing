import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposeComponent extends Component {
    componentDidMount() {
      console.log('did mount from compose component');
      this.shouldNavigateAways();
    }

    componentDidUpdate() {
      console.log('did update from compose component');
      this.shouldNavigateAways();
    }

    shouldNavigateAways() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposeComponent);
};