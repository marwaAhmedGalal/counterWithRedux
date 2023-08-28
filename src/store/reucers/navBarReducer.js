import { createStore } from "redux";

const initState = { countValue: 0, showCount: false };
const counterReducer = (state = initState, action) => {
  if (action.type === "increase") {
    return (
      console.log(state.countValue),
      { ...state, countValue: state.countValue + action.payload }
    );
  }
  if (action.type === "decrease") {
    return { ...state, countValue: state.countValue - action.payload };
  }
  if (action.type === "showcount") {
    return { ...state, showCount: !state.showCount };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
