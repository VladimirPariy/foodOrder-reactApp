import React from 'react';
import {DUMMY_MEALS} from './dummy-meals'
import cl from './MealList.module.css'
import Card from "../UI/card/Card";

const MealsList = () => {
  const mealList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
  return (
    <section className={cl.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;