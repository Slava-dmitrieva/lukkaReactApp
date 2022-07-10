import { ButtonBuy } from '../../foodItem/bottom/button'
import style from './orderInfo.module.scss'
import { useRef } from 'react'

export const OrderInfo = ({onClick}) => {

    const ref = useRef()
    
const submitHandler = async (event) => {
event.preventDefault()

const form = ref.current

const body = new FormData(form)
console.log(body);

const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: body
    })

if(!response.ok) throw new Error('Failed fetch')
alert('Success')
}


    return(
        <form ref={ref} onSubmit={submitHandler} className={style.form}>
             <label className={style.label}> 
                 Name:
             <input type="text" name="name"  className={style.input} />
            </label>
            <label className={style.label}>
                 Email:
             <input type="text" name="email" className={style.input} />
            </label>
            <label className={style.label}>
                 Phone:
             <input type="text" name="tel" className={style.input} />
            </label>
            <label className={style.label}>
                 Address:
             <input type="text" name="address" className={style.input} />
            </label>
            <div className={style.send}>
                    <ButtonBuy type="submit" onClick={onClick}>
                        Send
                    </ButtonBuy>
            </div> 
</form>
    )
}