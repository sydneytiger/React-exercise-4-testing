import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };

  componentDidMount() {
    console.log('did mount from CommonBox');
  }

  componentDidUpdate() {
    console.log('did update from CommonBox');
  }

  handleOnChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  handleFetchComment = e => {
    e.preventDefault();
    this.props.fetchComment();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          id="txtComment"
          rows="10"
          cols="50"
          value={this.state.comment}
          onChange={this.handleOnChange} />
        <div>
          <button id="btnSubmit">Submit</button>
          <button id="btnFetch" onClick={this.handleFetchComment}>Fetch Comments</button>
        </div>
      </form>
    );
  }
};

export default connect(null, actions)(requireAuth(CommentBox));