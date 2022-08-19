//importo funcion createStore que nos va apermitir crear el store, la fuente que va a concentrar toda la info de la app.
import { createStore } from "redux";
import reducer from '../reducers/index'

const store = createStore(reducer) //creo variable y le paso por parametro el reducer que es la funcion que me combina todos los reducer 

//suscribe va a estar escuchando cualquier cambio en el estado

store.subscribe(()=>console.log(store));

export default store;