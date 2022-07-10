import style from './foodBuy.module.scss'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { deleteItemFromCart, setItemInCart } from '../redux/cart/reduser'
import { ButtonBuy } from '../foodItem/bottom/button'


export const FoodBuy = (props) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === props.id)
    const handleClick = (e) => {
        e.stopPropagation()
        if(isItemInCart){
            dispatch(deleteItemFromCart(props.id))
        }else{
            dispatch(setItemInCart({...props, count: 1}));
                }
            }
        
    return (
        <div className={style.foodBuy}>
            <span className={style.foodBuePrice}>{props.price} uah</span>
            <div className={style.buttonBuy}>
                <ButtonBuy
                    type={isItemInCart ? "primary" : "secondary"}
                    onClick={handleClick}>
                    {isItemInCart ? 'Remove' : 'Buy'}
                </ButtonBuy>
            </div>

        </div>
    )
}