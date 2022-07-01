import React, {Fragment} from 'react';
import PromoText from "./PromoText";
import MealsList from "./MealsList";

const Meals = () => {
  return (
    <Fragment>
      <PromoText/>
      <MealsList/>
    </Fragment>
  );
};

export default Meals;