import style from './cartMenu.module.scss'
import { calcTotalPrice } from '../untils'
import { ButtonBuy } from '../foodItem/bottom/button'
import { CartItem } from '../cartItem/cartItem'

export const CartMenu = ({items, onClick}) =>{

    
    return (
        <div className={style.cartMenu}>
            <div className={style.foodList}>
                {items.length > 0 ? items.map(food => <CartItem key={food.title} price={food.price} title={food.title} id={food.id} link={food.image}/>) : 'Cart is empty'}    
            </div>
            {
                items.length > 0 ? (
                    <div className={style.checkOut}>
                <div className={style.arrange}>
                    <div className={style.totalPrice}>
                        <span>Total: </span>
                        <span>{ calcTotalPrice(items) }.00 uah</span>
                    </div>
                    <div className={style.checkOutButton}>
                    <ButtonBuy type="secondary" size="m" onClick={onClick}>
                        Check Out
                    </ButtonBuy>
                    </div>
                

                </div>
                </div>
                ) : null
            }
        </div>
        )
}