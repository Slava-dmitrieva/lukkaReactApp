import style from './nav.module.scss'
import {useLocation} from 'react-router-dom'
import { appFood } from '../redux/state'
import { useState, useEffect } from 'react'

export const NavBar = () => {

    const [linkList, setLinkList] = useState([])

useEffect(()=>{
    const links = {}

    appFood.forEach(({category})=>{
        links[category] = 'link'
    })
setLinkList(Object.keys(links))
},[])

const location = useLocation()

 if(location.pathname.includes('order')){
     return null
}

    return (
        <div className={style.nav}> 
        <div className={style.food}>FOOD</div>
        {
            linkList.map((link)=>{
                return(
                    <div key={link} className={style.navItem}><a href={`#${link}`} className={style.navLink}>{link}</a></div>

                )
            })
        }
        </div>
    )
}

