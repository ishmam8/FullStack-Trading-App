import './css/App.css';
import {React, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import StockList from "./pages/StockList.js";
import StockInd from "./pages/StockInd"

const BASE_URL_BACKEND = 'http://127.0.0.1:8000/';

function App() {
  const [stock_symbol, set_symbol] = useState()

  return (
    <div className="App">
      {/* <h1 className='text-center'>Stock Trading App</h1> */}
      {/* <Link to="StockList">Click to view our about page</Link> */}
      <Routes> 
        <Route path='/stock' element={<StockList />}>
        </Route>
        <Route path='/stock/:symbol' name='symbol' element={<StockInd />}>
        </Route>
    </Routes>
    <div className='Navigate'>
      <Link to= "/stock">StockList</Link>
    </div>
    </div>
  );
}

export default App;
