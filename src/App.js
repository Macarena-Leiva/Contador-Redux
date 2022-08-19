
import { Provider } from 'react-redux';
import './App.css';
import { Contador } from './componentes/Contador';
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <h1>Redux</h1>
    <Contador />
    </div>
    </Provider>
  );

}

export default App;
