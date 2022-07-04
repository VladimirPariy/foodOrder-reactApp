import React, {useContext, useEffect, useState} from 'react';
import cl from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
  
  const [isButtonAnimated, setIsButtonAnimated] = useState(false)
  
  const context = useContext(CartContext)
  
  const cartItemNumber = context.items.reduce((acc, rec) => {
    console.log(acc, rec)
    return acc + rec.amount
  }, 0)
  
  const buttonClasses = `${cl.button} ${isButtonAnimated ? cl.bump : ''}`
  
  useEffect(() => {
    if (context.items.length === 0) {
      return
    }
    setIsButtonAnimated(true)
    
    const timer = setTimeout(() => {
      setIsButtonAnimated(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [context.items])
  
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={cl.icon}>
        <CartIcon/>
      </span>
      <span>Корзина</span>
      <span className={cl.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default HeaderCartButton;