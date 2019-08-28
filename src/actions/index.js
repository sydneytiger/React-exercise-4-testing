import * as types from 'actions/type';

export function saveComment(comment) {
  return {
    type: types.SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComment() {
  return {
    type: types.FETCH_COMMENT,
  }
}