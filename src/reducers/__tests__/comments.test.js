import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/type';

describe('test comment reducer', () => {
  const state = ['existing comment 1', 'existing comemnt 2'];

  it('should handle actions of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'test new comment' };
    const newState = commentReducer(state, action);
    expect(newState).toEqual([...state, 'test new comment']);
  });

  it('should action with nuknown type', () => {
    const unknownAction = { type: '', payload: 'test new comment' };
    const newState = commentReducer(state, unknownAction);
    expect(newState).toEqual(state);
  });
});