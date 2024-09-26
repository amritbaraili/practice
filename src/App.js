import logo from "./logo.svg";
import "./App.css";

import Signup from "./components/signup";
import Product from "./components/product/product";
import Items from "./components/items/items";

import Counter from "./components/count";
import Todos from "./components/todos";

function App() {
  return (
    <div>

      <Todos />
      {/* <Counter /> */}
      <Product />
      <Signup />

      <Items />
    </div>
  );
}

export default App;
