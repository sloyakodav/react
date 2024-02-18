import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../../data";
const reducerFunc = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [{ name: "brahim", id: "1" }] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newDATA = state.people.filter((item) => item.id !== action.payload.id);
    return { ...state, people: newDATA };
  }

  return state;
};
export default reducerFunc;
