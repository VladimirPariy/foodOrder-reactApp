import React from 'react';
import cl from './MealItemForm.module.css'
import Input from "../../UI/input/Input";

const MealItemForm = (props) => {
  return (
    <form className={cl.form}>
      <Input label='Количество' input={{
        id:'amount',
        type:'number',
        min:'0',
        step:'1',
        defaultValue:'0'
      }}/>
      <button>Добавить</button>
    </form>
  );
};

export default MealItemForm;