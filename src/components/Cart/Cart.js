import React from 'react';
import cl from './Cart.module.css'

const Cart = (props) => {
  
  const cartItem = <ul className={cl['cart-items']}>{[{
    id: 'm1',
    name: 'sushi',
    amount: 2,
    price: 10.99
  }].map(item => <li>{item.name}</li>)}</ul>
  
  return (
    <div>
      {cartItem}
      <div className={cl.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={cl.actions}>
        <button className={cl['button--alt']}>Закрыть</button>
        <button className={cl.button}>Заказать</button>
      </div>
    </div>
  );
};

export default Cart;