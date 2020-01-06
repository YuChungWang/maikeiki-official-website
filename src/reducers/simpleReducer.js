import { handleActions } from 'redux-actions';
import { SIMPLE_ACTION } from '../actions/simpleAction';

const initialState = {
  type: false,
};

export default handleActions(
  {
    [SIMPLE_ACTION]: (state, { payload }) => {
      const { type } = payload;
      return type;
    },
  },
  initialState,
);
