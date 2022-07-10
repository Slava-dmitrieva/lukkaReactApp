import style from './header.module.scss';
import { Link } from 'react-router-dom';
import { Basket } from '../basket/basket';

export const Header = (props) => {
 return (
    <div className={style.header}>
        <div className={style.headerPosition}>
        <div className={style.wrapperPos}>
        <div className={style.wrapper}>
            
            <Link to='/' className={style.headerStoreTitle}>
                LUKKA
            </Link>
        </div>
        <div className={`${style.wrapper} ${style.headerBasketBtnWrapper}`}>
            <Basket />
        </div>
        </div>
        </div>
    </div>
 )
}