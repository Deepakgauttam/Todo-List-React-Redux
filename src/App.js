import React from "react";
import { Provider } from "react-redux";
import Counter from "./redux/components/Counter";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
