import React, { useState } from "react";
import './Calculator.css';


function Calculator() {

    const [number, setNumber] = useState({});
    const [sum, setSum] = useState(null);

    const onHandleChange = (e) => {
        setNumber({...number, [e.target.name]: e.target.value});
    } 

    const onHandleClear = () => {
        setSum(null);
    }  

    const onHandleClick = (type) => {
        let firstInput = +(number.firstInput);
        let secondInput = +(number.secondInput);

        let sum;
       if(type==='add') {
          sum = firstInput + secondInput;
       } 
       else if(type==='subs') {
          sum = firstInput - secondInput;
       }
        else if(type==='mul') {
           sum = firstInput * secondInput;
       }
        else if(type==='div') {
            sum = firstInput / secondInput;
       }
       setSum(sum);
       setNumber({});
    }

    

   return (
    <>
    <div className="calApp">
    <div>
    Input one : <input type="number" name="firstInput"
       value={number.firstInput || ''} onChange={onHandleChange} />
    </div>
    <div>
    Input two : <input type="number" name="secondInput"
       value={number.secondInput || ''} onChange={onHandleChange} />
    </div>
    <div>&nbsp;</div>
    <div>
        <input type="button" onClick={()=> onHandleClick('add')} value="Add(+)"/>&nbsp;
        <input type="button"  onClick={()=> onHandleClick('subs')} value="Subs(-)"/>&nbsp;
        <input type="button"  onClick={()=> onHandleClick('mul')} value="Mul(*)"/>&nbsp;
        <input type="button" onClick={()=> onHandleClick('div')} value="Div(/)"/>
    </div>
    {
    (sum!==null) ? <div>
        <div className="result">{sum}</div>
        <input type="button" value="x" onClick={onHandleClear}/></div>:''
         } 
    </div>
    </>
    
   )
}

export default Calculator;