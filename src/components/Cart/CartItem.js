import cl from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <li className={cl["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={cl.summary}>
          <span className={cl.price}>{price}</span>
          <span className={cl.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={cl.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
