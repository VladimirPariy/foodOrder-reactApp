import './App.css';
import Header from "./components/Layout/Header";
import {Fragment, useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false)
  
  const showCartHandler = () => {
    setCartIsVisible(true)
  }
  
  const hideCartHandler =()=> {
    setCartIsVisible(false)
  }
  
  return (
    <Fragment>
      {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
