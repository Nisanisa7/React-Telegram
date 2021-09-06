import './App.css';
import Routes from './config/Router';
import store from '../src/config/Redux/store';
import { Provider } from 'react-redux';


function App() {

  return (
    <>
    <Provider store={store}>

      <Routes/>
    </Provider>
   </>
  );
}

export default App;
