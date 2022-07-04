import React, {useRef, useState} from 'react';
import cl from './MealItemForm.module.css'
import Input from "../../UI/input/Input";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true)
  const amountInputRef = useRef()
  
  const submitHandler = (e) => {
    e.preventDefault()
    const inputAmount = amountInputRef.current.value
    if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
      setIsValid(false)
      return;
    }
    props.onAddToCart(+inputAmount)
  
  }
  
  return (
    <form className={cl.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Количество'
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1'
        }}/>
      <button>Добавить</button>
      {!isValid && <p>Пожалуйста введите кол-во от 1 до 10</p>}
    </form>
  );
};

export default MealItemForm;