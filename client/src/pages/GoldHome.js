import GoldRate from "../components/GoldRate.js"
import LoanCalculator from "../components/LoanCalculator.js"

export default function GoldHome () {
    return (
        <div className="goldcontainer" >
            <div style={{border: "2px solid #d0cccc54", width:'45%', marginLeft: "auto", marginRight: "auto", marginTop: "3%", 
        boxShadow: '1px 5px 7px #888888', borderRadius:'10px'}}><GoldRate/></div>
            <div style={{border: "2px solid #d0cccc54", width:'70%', marginLeft: "auto", marginRight: "auto", marginTop: "3%", 
        boxShadow: '1px 5px 7px #888888', borderRadius:'10px'}}><LoanCalculator/></div>
        </div>
    )
}