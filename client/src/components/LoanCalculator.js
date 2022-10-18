import React from "react";
import { useState } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "../css/loancalculator.css";

export default function LoanCalculator () {
    const [value, setValue] = useState(100000.0)
    
    const val22K_6 =  Number(((value/7140)+1).toFixed(2));
    const val22K_12 = Number(((value/7140)+2).toFixed(2));
    // document.getElementById("roi").width() = document.getElementById("6month").width();
    const sliderProps = {
        min: 100000.0,
        max: 2000000.0,
        step: 100000.0, 
        dotStyle: {borderColor: 'rgba(252, 96, 6, 0.884)'}, 
        activeDotStyle: {backgroundColor: '#FFD700'},
        railStyle: {backgroundColor: 'rgb(181, 181, 181)'},
        trackStyle: [{backgroundColor: 'rgba(252, 96, 6, 0.884)'}],
        handleStyle: [{backgroundColor: 'rgba(252, 96, 6, 0.884)', width: '1rem'}],
        marks: {100000.0: "1L", 200000.0: "2L", 300000.0: "3L", 400000.0: "4L", 500000.0: "5L", 750000.0: "7.5L",
                1000000.0: "10L", 1500000.0: "15L", 2000000.0: "20L"}
    }

    return (
        <div className="calculator" id="calculator">
            <div className="sliderContainer">
                <p style={{fontWeight:'bold', fontSize:'18px'}}>Loan Amount: Tk {value}</p>
                {/* <div style={{ marginTop: 40 }}><b></b>Tk {value}</div> */}
                <Slider
                    className="slider"
                    value= {value}
                    onChange={val => setValue(val)}
                    {...sliderProps}
                />
            </div>
            <div className="loan-header-details" >
                    <div className="loan-rate-interest" style={{fontWeight: 'bold'}}>Rate of Interest</div>
                    <div className="loan-rate-scheme" style={{fontWeight: 'bold'}}>Scheme Details</div>
                    <div className="loan-terms" style={{fontWeight: 'bold'}}>Loan Tenure</div>
                    <div className="loan-required-gold" style={{fontWeight: 'bold'}}>Required Net Gold</div>
                    <div className="loan-required-gold" style={{color: 'white'}}>Details</div>
            </div>
            <div className="loan-body-6months">
                <div id='6month' className="loan-details-rate-interest">
                    <p className="roi-ptag">0.99%</p>
                    <p className="roi-info-ptag">*Effective monthly interest rate after rebate, 11.88% P.A.</p>
                </div>
                <div className="loan-details-scheme">
                    <table className="table-roi">
                        <thead className="thead-roi">
                            <tr style={{textAlign:"center"}}>
                            <th colSpan="2" scope="col">Interest Rate for Payment Periods</th>
                            </tr>
                        </thead>
                        <tbody className="tbody-roi" style={{textAlign:"center"}}>
                            <tr>
                                <td>Instant Cashback</td>
                                <td>0.90% P.M</td>
                            </tr>
                            <tr>
                                <td>0-30 Days</td>
                                <td>0.99% P.M</td>
                            </tr>
                            <tr>
                                <td>31-60 Days</td>
                                <td>1.35% P.M</td>
                            </tr>
                            <tr>
                                <td>61-90 Days</td>
                                <td>1.50% P.M</td>
                            </tr>
                            <tr>
                                <td>180 Days</td>
                                <td>20.40% P.A</td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
                <div className="loan-details-terms">
                    <div className="loan-details-terms-inside">
                    <p>6 months</p>
                    </div>
                </div>
                <div className="loan-details-gold-value">
                    <div className="loan-details-gold-child">
                            <p style={{font: 'bold 18px serif'}}>{val22K_6} gms</p>
                        </div>
                    </div>
                <div className="loan-select">
                    <a href="#" className="button">Select</a>
                </div>
            </div>
            <div className="loan-body-12months">
                <div className="loan-details-rate-interest">
                    <p className="roi-ptag">1.25%</p>
                    <p className="roi-info-ptag">*Effective monthly interest rate after rebate, 15% P.A.</p>
                </div>
                <div className="loan-details-scheme">
                    <table className="table-roi">
                        <thead className="thead-roi">
                            <tr style={{textAlign:"center"}}>
                            <th colSpan="2" scope="col">Interest Rate for Payment Periods</th>
                            </tr>
                        </thead>
                        <tbody className="tbody-roi" style={{textAlign:"center"}}>
                            <tr>
                                <td>Instant Cashback</td>
                                <td>1.20% P.M</td>
                            </tr>
                            <tr>
                                <td>0-30 Days</td>
                                <td>1.25% P.M</td>
                            </tr>
                            <tr>
                                <td>31-60 Days</td>
                                <td>1.50% P.M</td>
                            </tr>
                            <tr>
                                <td>61-90 Days</td>
                                <td>1.60% P.M</td>
                            </tr>
                            <tr>
                                <td>180 Days</td>
                                <td>21% P.A</td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
                <div className="loan-details-terms">
                    <div className="loan-details-terms-inside">
                    <p>12 months</p>
                    </div>
                </div>
                <div className="loan-details-gold-value">
                    <div className="loan-details-gold-child">
                        <p style={{font: 'bold 18px serif'}}>{val22K_12} gms</p>
                    </div>
                </div>
                <div className="loan-select">
                    <a href="#" className="button">Select</a>
                </div>
            </div>
        </div>
    );
}