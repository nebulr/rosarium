import actions from './actions';
import RosaryModel from ' ../../../main/rosary/rosary.model';

const initState = { mystery: RosaryModel.getMystery() };

export default function mysteryReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_MYSTERY:
      return {
        mystery: action.payload.mystery
      };
    default:
      return state;
  }
}
