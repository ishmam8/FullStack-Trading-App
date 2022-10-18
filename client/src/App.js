import './css/App.css';
import {React, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import StockList from "./pages/StockList.js";
import StockInd from "./pages/StockInd.js";
import GoldHome from "./pages/GoldHome";
import Navbar from "./components/Navbar.js";

const BASE_URL_BACKEND = 'http://127.0.0.1:8000/';

function App() {
  const [stock_symbol, set_symbol] = useState()

  return (
    <div className="App">
      {/* <h1 className='text-center'>Stock Trading App</h1> */}
      {/* <Link to="StockList">Click to view our about page</Link> */}
      <Navbar/>
      <Routes> 
        <Route path='/stock' element={<StockList />}>
        </Route>
        <Route path='/stock/:symbol' name='symbol' element={<StockInd />}>
        </Route>
        <Route path='/goldscheme' name='goldscheme' element={<GoldHome />}>
        </Route>
    </Routes>
    {/* <div className='Navigate'>
      <Link to= "/stock">StockList</Link>
    </div> */}
    </div>
  );
}

export default App;
