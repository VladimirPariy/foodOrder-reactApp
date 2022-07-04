import React, {useContext} from 'react';
import cl from './Cart.module.css'
import Modal from "../UI/modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
  
  const hasItems = cartContext.items.length > 0;
  
  const removeCartItemHandler = (id) => {}
  const addCartItemHandler = (item) => {}
  
  const cartItem = <ul className={cl['cart-items']}>
    {cartContext.items.map(item => <CartItem key={item.id}
                                             name={item.name}
                                             amount={item.amount}
                                             price={item.price}
                                             onAdd={addCartItemHandler.bind(null, item)}
                                             onRemove={removeCartItemHandler.bind(null, item.id)}
    />)}
  </ul>
  
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className={cl.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={cl.actions}>
        <button className={cl['button--alt']} onClick={props.onHideCart}>Закрыть</button>
        {hasItems && <button className={cl.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;