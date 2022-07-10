import style from './itemsInCart.module.scss'


export const ItemsInCart =  ({
    quantity = 0
}) => {
    return (<>
    {
        quantity > 0  && <div className={style.items}>
            {quantity}
        </div>
    }
    </>)
    
}