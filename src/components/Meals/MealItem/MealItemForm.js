import React from 'react';
import cl from './MealItemForm.module.css'
import Input from "../../UI/input/Input";

const MealItemForm = (props) => {
  return (
    <form className={cl.form}>
      <Input label='Количество' input={{
        id:props.id,
        type:'number',
        min:'1',
        step:'1',
        defaultValue:'1'
      }}/>
      <button>Добавить</button>
    </form>
  );
};

export default MealItemForm;