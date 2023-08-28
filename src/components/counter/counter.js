import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import { useCallback, useEffect } from "react";
import { decrease, increase } from "../../store/reucers/navBarReducer";

function Counter() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mainDivCount">
      <h1>Counter App</h1>
      {store.showCount && (
        <>
          <div className="count">counter: {store.countValue}</div>
          <div className="countButtons">
            <button
              className="countButton"
              onClick={() => dispatch(increase(5))}
            >
              increase
            </button>
            <button
              className="countButton"
              onClick={() => dispatch(decrease(2))}
            >
              decrease
            </button>
          </div>
        </>
      )}

      <div>
        <button className="countButton">show and hide</button>
      </div>
    </div>
  );
}

export default Counter;
