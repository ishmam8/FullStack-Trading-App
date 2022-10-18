import '../css/StockList.css';
import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const BASE_URL_BACKEND = 'http://127.0.0.1:8000/';

export default function StockList() {
  const [post, setPost] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  async function fetchStock() {
    await axios.get(BASE_URL_BACKEND).then((response) => {
      setPost((response.data.rows));
      setLoading(false);
    });
  }

  React.useEffect(() => {
    fetchStock();
  }, []) 

  // wait for the table to render
  if (isLoading) {
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
          <tr>
          <td rowspan="2" colspan="2" valign="center" align="center">
              <div class="spinner-border" role="status" style={{margin:"2rem"}}>
                <span class="sr-only">Loading...</span>
              </div>
          </td>
          </tr>
        </table>
      </div>
    )
  };

  if (!post) return null;

  // render the stocks table
  const stock = () => {
      return (
        <div className='container'>
          <h1>Stocks</h1>
          <table class='table table-striped table-hover' id='table'>
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
