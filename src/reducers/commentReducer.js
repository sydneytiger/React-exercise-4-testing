import * as types from 'actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case types.SAVE_COMMENT:
      return [...state, action.payload];
    case types.FETCH_COMMENT:
      const comments = action.payload.data.map(c => c.name);
      return [...state, ...comments];
    default:
      return state;
  }
}