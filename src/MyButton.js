import React from "react";
import './MyCalculator.css';

function MyButton(props){
    const handleclick = (e) => {buttonClicked(e.target.value);};
    return(
        <div className="buttons">
            <div>
                <button className='btn btn-action' onClick={handleclick} value="c">C</button>
                <button className='btn btn-action' onClick={handleclick} value="+/-">+/-</button>
                <button className='btn btn-action' onClick={handleclick} value="%">%</button>
                <button className='btn btn-operator' onClick={handleclick} value="/">/</button>
                
                </div> 
                <div>
                    <button className='btn' onclick={handleclick}value="7">7</button>
                    <button className='btn' onclick={handleclick}value="8">8</button>
                    <button className='btn' onclick={handleclick}value="9">9</button>
                    <button className='btn btn-operator' onclick={handleclick}value="*">*</button>
                </div>
                <div>
                    <button className='btn' onclick={handleclick}value="4">4</button>
                    <button className='btn' onclick={handleclick}value="5">5</button>
                    <button className='btn' onclick={handleclick}value="6">6</button>
                    <button className='btn btn-operator' onclick={handleclick}value="-">-</button>
                </div>
                <div>
                    <button className='btn' onclick={handleclick}value="1">1</button>
                    <button className='btn' onclick={handleclick}value="2">2</button>
                    <button className='btn' onclick={handleclick}value="3">3</button>
                    <button className='btn btn-operator' onclick={handleclick}value="+">+</button>
                </div>
                <div>
                    <button className='btn btn-0' onclick={handleclick}value="0">0</button>
                    <button className='btn' onclick={handleclick}value=".">.</button>
                    <button className='btn btn-operator' onclick={handleclick}value="=">=</button>
                </div>
            </div>
    );
} 

export default MyButton;