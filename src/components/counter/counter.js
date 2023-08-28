import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import { useCallback, useEffect } from "react";
import { decrease, increase } from "../../store/reucers/counterSlice";

function Counter() {
  const store = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  return (
    <div className="mainDivCount">
      <h1>Counter App</h1>

      <>
        <div className="count">counter: {store.counter.countValue}</div>
        <div className="countButtons">
          <button className="countButton" onClick={() => dispatch(increase(5))}>
            increase
          </button>
          <button className="countButton" onClick={() => dispatch(decrease(2))}>
            decrease
          </button>
        </div>
      </>

      <div>
        <button className="countButton">
          {store.auth.isLogIn ? "login" : "logout"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
