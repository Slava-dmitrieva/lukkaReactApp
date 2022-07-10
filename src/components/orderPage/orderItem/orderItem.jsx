 import { useDispatch } from 'react-redux'
import { FoodCover } from '../../foodItem/foodCover/foodCover';
import style from './orderItem.module.scss'
import { deleteItemFromCart, addCountFromCart , minusCountFromCart} from '../../redux/cart/reduser';

export const OrderItem = ({food}) => {
     const dispatch = useDispatch();


     const removeHandler =()=>{
      if(food.count > 1){
        dispatch(minusCountFromCart(food.id))
      }
      if(food.count <= 1 ){
      
        dispatch(deleteItemFromCart(food.id))
      }
     }


const addHandler =()=>{
dispatch(addCountFromCart(food.id))
}

    return(
        <div className={style.orderItems}>
            <div className={style.orderItemCover}>
              <FoodCover image={food.link}/>  
                          
            </div>
            <div className={style.orderTitle}>
                <span>{food.title}</span>
              </div>
            <div className={style.orderItemPrice}>
              <div className={style.hendler}>
                <button onClick={removeHandler}>-</button>
                <span>{food.count}</span>
                <button onClick={addHandler}>+</button>
              </div>
                <span>
                   {(food.price * food.count)}.00 uah
                    </span>
            </div>
        </div>
    )
}