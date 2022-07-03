import React from 'react';
import cl from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import cartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  
  const context = useContext(CartContext)
  const cartItemNumber = context.items.reduce((acc, rec) => {
    return acc+rec.amount
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