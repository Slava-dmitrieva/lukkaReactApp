import style from './cartItem.module.scss'

export const CartItem = ({
    title,
    price,
    id,
    link
}) => {
    return (
        <div className={style.cartItem}>
            <span>{title}</span>
            <div className={style.cartItemPrice}>
                <span>{price}.00 uah</span>
            </div>
        </div>
    )
}