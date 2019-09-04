import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  renderButton() {
    if (this.props.auth) {
      return <button onClick={() => { this.props.changeAuth(false) }}>Sign Out</button>
    }
    else {
      return <button onClick={() => { this.props.changeAuth(true) }}>Sign In</button>
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.renderHeader()}
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact component={CommentList} />
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);