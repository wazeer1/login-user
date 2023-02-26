import logo from './logo.svg';
import './App.css';
import Store from './context/Store';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/router/routers/MainRouter';

function App() {
  return (
   <Store>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
   </Store>
  );
}

export default App;
