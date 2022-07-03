import React from 'react';
import {DUMMY_MEALS} from './dummy-meals'
import cl from './MealList.module.css'
import Card from "../UI/card/Card";
import MealItem from "./MealItem/MealItem";

const MealsList = () => {
  const mealList = DUMMY_MEALS.map(meal => <MealItem name={meal.name}
                                                     description={meal.description}
                                                     price={meal.price}
                                                     key={meal.id}
                                                     id={meal.id}
    />
  )
  return (
    <section className={cl.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;