export default ({ dispatch }) => next => action => {
  // check if action.payload is a promise
  // Yes, wait for resolve
  // No, send action to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(resp => {
    const newAction = { ...action, payload: resp };
    dispatch(newAction);
  });
}