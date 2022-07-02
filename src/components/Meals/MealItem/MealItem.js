import React from 'react';
import cl from './MealItem.module.css'

const MealItem = (props) => {
  
  const formattedPrice = `$${props.price.toFixed(2)}`
  return (
    <li className={cl.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={cl.description}>{props.description}</div>
        <div className={cl.price}>{formattedPrice}</div>
      </div>
      <div>
      
      
      </div>
    </li>
  );
};

export default MealItem;