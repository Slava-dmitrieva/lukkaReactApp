import style from './foodCover.module.scss'


export const FoodCover = ({image = ''}) => {
    return (
        <div className={style.bgFoodCover} style={{backgroundImage:`url(${image})`}}/>
    )
}