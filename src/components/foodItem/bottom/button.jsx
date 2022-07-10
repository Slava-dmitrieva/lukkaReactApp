import classNames from 'classnames';
import './button.scss';

export const ButtonBuy = ({onClick, type, children, size = 's'}) => {
    const btnClass = classNames({
        btn: true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': size === 's',
        'btn--madium': size === 'm'
    })
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button> 
    )
}


