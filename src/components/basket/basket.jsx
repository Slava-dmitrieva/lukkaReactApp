import style from './basket.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux/es/exports';
import { calcTotalPrice } from '../untils';
import { CartMenu } from '../cartMenu/cartMenu';
import { useState } from 'react';
import { ItemsInCart } from './itemsInCart/itemsInCart';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

export const Basket = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const history = useHistory();

    const handleClick = useCallback(() =>{
        setIsCartMenuVisible(false);
        history.push('/order');
    }, [history]);
    return (
        <div className={style.cartBlock} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
            <ItemsInCart quantity={items.length}/>
            <AiOutlineShoppingCart size={25} className={style.icon}  />
            {totalPrice > 0 ? <span className={style.totalPrice}>{totalPrice}.00 uah</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    )
}