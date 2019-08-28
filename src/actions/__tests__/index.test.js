import * as actions from 'actions';
import * as types from 'actions/type';

describe('saveComment', () => {
  it('should have a property named type with SAVE_COMMENT', () => {
    const action = actions.saveComment('new comment');
    expect(action.type).toEqual(types.SAVE_COMMENT);
  });

  it('should have a property named payload with comment data', () => {
    const action = actions.saveComment('new comment');
    expect(action.payload).toEqual('new comment');
  });

  it('should have a property named type with FETCH_COMMENT', () => {
    const action = actions.fetchComment();
    expect(action.type).toEqual(types.FETCH_COMMENT);
  });
});