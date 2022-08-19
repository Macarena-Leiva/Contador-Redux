import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

//estado inicial de la aplicacion
const initialState = 0

//funcion que voy a exportar y va a recibir un state, si no le pasamos estado toma la de initialState
export const contadorReducer =(state = initialState, action)=>{
switch (action.type) {
    case INCREMENT:
        return state + 1;
    case DECREMENT:
        return state - 1;
    case INCREMENT_5:
        return state + action.payload;
    case DECREMENT_5:
        return state - action.payload;
    case RESET:
        return initialState;  

    default:
        return state;
}
}