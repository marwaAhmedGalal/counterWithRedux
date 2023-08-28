import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import { useCallback, useEffect } from "react";

function Counter() {
  // const countValue = useSelector((state) => {
  //   if (state.countValue < 1) {
  //     return "no number";
  //   }
  //   return state.countValue;
  // });
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const counterOration = useCallback(
    (type, payload) => {
      console.log(type, payload);
      dispatch({ type, payload });
    },
    [dispatch]
  );
  useEffect(() => {
    return () => {
      counterOration("increase", 10);
    };
  }, [counterOration]);

  // const increase = () => {
  //   const action = { type: "increase", payload: 5 };
  //   dispatch(action);
  // };
  // const decrease = () => {
  //   const action = { type: "decrease", payload: 2 };
  //   dispatch(action);
  // };
  const hundleCounterValue = (value) => {
    if (value < 1) {
      return "no number";
    }
    console.log(value);
    return value;
  };
  const showcount = () => {
    dispatch({ type: "showcount" });
  };

  return (
    <div className="mainDivCount">
      <h1>Counter App</h1>
      {store.showCount && (
        <>
          <div className="count">
            counter: {hundleCounterValue(store.countValue)}
          </div>
          <div className="countButtons">
            <button
              className="countButton"
              onClick={() => counterOration("increase", 5)}
            >
              increase
            </button>
            <button
              className="countButton"
              onClick={() => counterOration("decrease", 2)}
            >
              decrease
            </button>
          </div>
        </>
      )}

      <div>
        <button className="countButton" onClick={showcount}>
          show and hide
        </button>
      </div>
    </div>
  );
}

export default Counter;
