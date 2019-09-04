import stateSchema from 'middlewares/stateSchema';
import tv4 from 'tv4';

export default ({ getState }) => next => action => {
  next(action);
  debugger;
  const valid = tv4.validate(getState(), stateSchema);
  if (!valid) {
    console.warn("invalid state schema detected");
  }
}