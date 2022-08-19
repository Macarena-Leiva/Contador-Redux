//centraliza todos los reducers que tenga la aplicacion,

import { combineReducers } from "redux";// por lo tanto tengo que llamar al metodo conbineReducers
import { contadorReducer } from "./contadorReducer";

//reducer general de la aplicacion, combina todos los reducers que le voy pasando
const reducer = combineReducers({
    contador:contadorReducer  /* llamo a la funcion reductora contador, combinando así los reducers */
}) //creo una constante que va a ejecutar la funcion combineReducers que recibe un objeto y en cada propiedad va a recibir cada uno de los reducers

export default reducer; 