import '../css/StockList.css';
import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const BASE_URL_BACKEND = 'http://127.0.0.1:8000/';

export default function StockList() {
  const [post, setPost] = React.useState();

  React.useEffect(() => {
    axios.get(BASE_URL_BACKEND).then((response) => {
      setPost((response.data.rows));
    });
  }, []) 

  if (!post) return null;

  const stock = () => {
    return (
      <div className='container'>
        <h1>Stocks</h1>
        <table class='table table-hover' id='table'>
          <thead class="thead-dark">
            <tr>
              <th scope="col">SYMBOL</th>
              <th scope="col">NAME</th>
            </tr>
          </thead>
          <tbody>
          {post.map(p => {
            return (
              <tr>
                {/* <td><a href={'/stock/' + p.symbol }>{p.symbol}</a></td>  */}
                <td><Link to={`/stock/${p.symbol}`}>{p.symbol}</Link></td> 
                <td>{p.name}</td>
              </tr>
            )
          })}
          </tbody> 
        </table>
      </div>
    )
  }

  return (
    <div className="Stocks">
      {stock()}
    </div>
  );
}
