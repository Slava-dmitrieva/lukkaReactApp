import React from "react";
import style from './home.module.scss';
// import { Starters } from "../../components/foodItem/starters/starters";
// import { Salads } from "../../components/foodItem/salads/salads";
// import { Soups } from "../../components/foodItem/soups/soups";
// import { Pasta } from "../../components/foodItem/pasta/pasta";
// import { Meat } from "../../components/foodItem/meat/meat";
// import { SideDishes } from "../../components/foodItem/sideDishes/sideDishes";
// import { Desserts } from "../../components/foodItem/desserts/desserts";
import { FoodList } from "../../components/foodList/foodList";
export const Home = () => {
        
    return (
        <div className={style.homePage}>
           <FoodList />
        </div>
    )
}