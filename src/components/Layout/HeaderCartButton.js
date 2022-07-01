import React from 'react';
import cl from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={cl.button}>
      <span className={cl.icon}>
        <CartIcon/>
      </span>
      <span>Корзина</span>
      <span className={cl.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;