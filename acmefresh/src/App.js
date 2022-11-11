
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import AllRoutes from './Pages/AllRoutes';
import { getCart } from './Redux/Cart/action';
import { fetchProducts } from './Redux/Product/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCart());
  }, );
  return (
    <div className="App">
     <AllRoutes/>
    </div>
  );
}

export default App;
