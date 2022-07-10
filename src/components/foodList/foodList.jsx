import React,{useState,useEffect} from 'react'
import {appFood} from '../redux/state'
import { FoodItem } from '../foodItem/foodItem'
import './food.list.style.scss'

export const FoodList =()=>{

const [categories, setCategories] = useState({})

useEffect(()=>{
    const catArr = {}

    appFood.forEach((food)=>{
        const { category} = food

        if(category in catArr){
            catArr[category].list.push(food)
        }else {
            catArr[category]  = {
                name: category,
               list: [food]
            }
        }
    })
setCategories(catArr)
},[])


    return(<>
    {
        Object.values(categories).map((food)=>{
            return(
                <div key={food.name}  
               // className={style.startersBlock}
                >
                    <div style={{position: 'relative', top: -100}} id={food.name}></div>
                <div className='categoryItems categoryTitle'><span>{food.name}</span></div>
                <div className='foodItems'>
                {
                        food.list.map(item => <FoodItem  title={item.title} id={item.id} key={item.id} description={item.description} image={item.image} price={item.price}/>)
                }
                </div>
                
            </div>
            )
        })
    }
    </>)
}