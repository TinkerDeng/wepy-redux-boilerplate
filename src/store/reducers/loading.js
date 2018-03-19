import { handleActions } from 'redux-actions';
import { SHOW, HIDE } from '../actions/loading';


export default handleActions(
  {
    [SHOW](state) {
      return {
        ...state,
        loadingState: true
      };
    },
    [HIDE](state) {
      return { ...state, loadingState: false };
    }
  },
  {
    loadingState: true
  }
);
