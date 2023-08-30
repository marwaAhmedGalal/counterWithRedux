import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import { useCallback, useEffect } from "react";

function Counter() {

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  
//useCallback to solve problem of evaluate
  const counterOration = useCallback(
    (type, payload) => {
      dispatch({ type, payload });
    },
    [dispatch]
  );
  
  //useEffect to show the value when the app open
  useEffect(() => {
    return () => {
      counterOration("increase", 10);
    };
  }, [counterOration]);

 
  const hundleCounterValue = (value) => {
    if (value < 1) {
      return "no number";
    }
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
