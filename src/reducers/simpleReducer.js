import { handleActions } from 'redux-actions';
import { SIMPLE_ACTION } from '../actions/simpleAction';

const initialState = {
  text: 'none',
};

export default handleActions(
  {
    [SIMPLE_ACTION]: (state, { payload }) => ({
      text: payload,
    }),
  },
  initialState,
);
