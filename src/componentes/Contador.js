import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, restar, restar5, sumar, sumar5 } from '../acciones/contadorActions'

export const Contador = () => {
const state = useSelector(state => state) //hook de redux me va a permitir acceder al estado de redux
const dispatch = useDispatch() //hook de redux de dispara una funcion que la voy a llamar en el boton

  return (
    <div className='boxPadre'>
        <h2>Contador Redux</h2>
        <div className='boxBtn'>  
            <button onClick={()=> dispatch(sumar5())}>+5</button>
            <button onClick={()=> dispatch(sumar())}>+1</button>
            <button onClick={()=> dispatch(reset())}>0</button>
            <button onClick={()=> dispatch(restar())}>-1</button>
            <button onClick={()=> dispatch(restar5())}>-5</button>
        </div>
        <h3>{state.contador}</h3>
    </div>
  )
}

