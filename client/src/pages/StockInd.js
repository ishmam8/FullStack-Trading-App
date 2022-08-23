import '../css/StockInd.css';
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from "axios";
import { Button } from 'semantic-ui-react'

const BASE_URL_BACKEND = 'http://127.0.0.1:8000/stock/';

export default function StockInd() {

  const [post, setPost] = React.useState([]);
  const [stockName, setStockName] = useState('');
  var {symbol} = useParams();
  var get_req = BASE_URL_BACKEND + symbol
  console.log(get_req)
  
  useEffect(() => {
    axios.get(get_req).then((response) => {
      setPost((response.data.prices));
      console.log("This is axios",response)
      setStockName((response.data.stock))
    });
  }, [])
  
  console.log(post)
  console.log(stockName)

  return (
    <div className="container">
      <div>
        <h1>{stockName.name}</h1>
        <Link to="/stock">
          <button class='ui right floated button'>
              <p>Click Me!</p>
          </button>
        </Link>
      </div>
      <table class='table table-hover' id='table'>
          <thead class="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Open</th>
              <th scope="col">High</th>
              <th scope="col">Low</th>
              <th scope="col">Close</th>
            </tr>
          </thead>
          <tbody>
          {post.map(p => {
            return (
              <tr>
                <td>{p.date}</td> 
                <td>{p.open}</td>
                <td>{p.high}</td>
                <td>{p.low}</td>
                <td>{p.close}</td>
              </tr>
            )
          })}
          </tbody> 
        </table>
    </div>
  );
}
