import React, {useContext} from 'react';
import cl from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  
  const context = useContext(CartContext)
  console.log(context)
  // debugger
  const cartItemNumber = context.items.reduce((acc, rec) => {
    console.log(acc, rec)
    return acc + rec.amount
  }, 0)
  
  return (
    <button className={cl.button} onClick={props.onClick}>
      <span className={cl.icon}>
        <CartIcon/>
      </span>
      <span>Корзина</span>
      <span className={cl.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default HeaderCartButton;