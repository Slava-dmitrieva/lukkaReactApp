import { calcTotalPrice } from '../untils'
import style from './orderPage.module.scss'
import { useSelector } from 'react-redux';
import { OrderItem } from "./orderItem/orderItem";
import { OrderInfo } from './orderInfo/orderInfo';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    
    if(items.length  < 1){
        return <h1>Your cart is empty</h1>
    }
    return (
        <div className={style.orderPage}>
            <div className={style.orderleft}> 
            {items.map((food,index) => <OrderItem key={index} food={food}/>)}
            <div className={style.totalPriceOrder}>
            <span>
                {calcTotalPrice (items)}.00 uah
            </span>
            </div>
            </div>


        <OrderInfo/>
        </div>
    )
}