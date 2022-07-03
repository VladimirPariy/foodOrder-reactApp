import React from 'react';
import cl from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={cl.button} onClick={props.onClick}>
      <span className={cl.icon}>
        <CartIcon/>
      </span>
      <span>Корзина</span>
      <span className={cl.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;