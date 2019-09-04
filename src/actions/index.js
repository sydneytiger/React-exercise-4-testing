import * as types from 'actions/type';
import axios from 'axios';

export function saveComment(comment) {
  return {
    type: types.SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComment() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: types.FETCH_COMMENT,
    payload: response
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: types.CHANGE_AUTH,
    payload: isLoggedIn
  }
}