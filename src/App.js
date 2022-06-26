//redux toolkit
import { Provider } from "react-redux";
import store from "./store";

//component
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
