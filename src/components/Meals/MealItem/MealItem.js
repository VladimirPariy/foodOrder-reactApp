import React, {useContext} from 'react';
import cl from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  // debugger
  const cartContext = useContext(CartContext)
  
  const formattedPrice = `$${props.price.toFixed(2)}`
  
  
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className={cl.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={cl.description}>{props.description}</div>
        <div className={cl.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;