import '../css/goldrate.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  {update1, update2} from '../goldPrice/actions'
import { useState, useEffect } from 'react';
import { persistor, store } from '../goldPrice/combineT12';
import {counterT1 } from '../goldPrice/reducers';

export default function GoldRate () {
    const [amount, setAmount] = useState("");
    useEffect(() => {
        // Runs ONCE after initial rendering
        
      }, [])
    const dispatch = useDispatch();
    const counter = useSelector(state => state);
    // const counter2 = useSelector(state => state.counterT2);

    const unsubscribe = store.subscribe(() => {
        console.log("Store changed!", store.getState());
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(amount)
        console.log("Counter value inside handlesubmit b/ dispatch", counter)
        dispatch(update1(amount))
    }

    // let goldRate = counter.map(function(val){
    //     return `${val.amount}`;
    // })
    console.log("Counter value OUTSIDE handlesubmit", counter.amount.amount)
    // const valueGold = JSON.parse(counter)
    //document.getElementById("demo").innerHTML = counter.amount.amount

    return (
        <div className="gold-rate-updates">
            <h2 className="h2tag" style={{textAlign: 'center'}} id="demo"> 
                Today's Price {counter.amount.amount}
            </h2>
            {/* <script>document.getElementById("demo").innerHTML = counter.amount</script> */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit"> Test Submit</button>
            </form>
            
            <div className="gold-type-container">
                <div className="type-22K">
                    <h3>22K</h3>
                </div>
                <div className="type-21K">
                    <h3>21K</h3>
                </div>
            </div>
            <div className="gold-price-container">
                <div className="gold-22K">
                    <h4>7241.56 gm</h4>
                </div>
                <div className="gold-21K">
                    <h4>6450.95 gm</h4>
                </div>
            </div>
        </div>
    )
}