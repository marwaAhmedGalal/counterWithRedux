import { useDispatch, useSelector } from "react-redux";
import "./counter.css";

//Actions
import { decrease, increase } from "../../store/reucers/counterSlice";
import { logIn, logOut } from "../../store/reucers/authSlice";
import { useCallback, useEffect } from "react";

function Counter() {
  const store = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const isLogIn = () => {
    return store.auth.isLogIn;
  };

  //useCallback to solve problem of evaluate
  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else {
        dispatch(decrease(value));
      }
    },
    [dispatch]
  );

  //dispatch the action
  const loginHandler = (status) => {
    if (status) {
      dispatch(logOut());
    } else {
      dispatch(logIn());
    }
  };

  //useEffect to show the value when the app open
  useEffect(() => {
    return () => {
      counterHandler("increase", 15);
    };
  }, [counterHandler]);

  return (
    <div className="mainDivCount">
      <h1>Counter App</h1>
      {isLogIn() && (
        <>
          <div className="count">counter: {store.counter.countValue}</div>
          <div className="countButtons">
            <button
              className="countButton"
              onClick={() => counterHandler("increase", 5)}
            >
              increase
            </button>
            <button
              className="countButton"
              onClick={() => counterHandler("decrease", 2)}
            >
              decrease
            </button>
          </div>
        </>
      )}

      <div>
        <button className="countButton" onClick={() => loginHandler(isLogIn())}>
          {isLogIn() ? "logout" : "login"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
