import { FoodBuy } from '../foodBuy/foodBuy'
import { FoodCover } from './foodCover/foodCover'
import style from './foodItem.module.scss'

export const FoodItem = (props) =>{
    return (
            <div className={style.foodItem}>
            <FoodCover image={props.image}/>
            <div className={style.foodItemDetails}>
                <div className={style.foodItemTitle}>{props.title}</div>
                <div className={style.foodInfo}>{props.description}</div>
                <div className={style.foodItemBuy}>
                    <FoodBuy price={props.price} id={props.id} title={props.title} link={props.image}/>
                </div>
               
                
            </div>
        </div>
    )
}