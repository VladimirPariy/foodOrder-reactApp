import React from 'react';
import {DUMMY_MEALS} from './dummy-meals'
import cl from './MealList.module.css'

const MealsList = () => {
  return (
    <section className={cl.meals}>
      <ul>
        {
          DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
        }
      </ul>
    </section>
  );
};

export default MealsList;