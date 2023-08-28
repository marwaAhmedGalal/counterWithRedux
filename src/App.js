import "./App.css";
import Counter from "./components/counter/counter";
import Navbar from "./components/navebar/navBar";
import { Provider } from "react-redux";
import store from "./store/reucers/navBarReducer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
