import React, { useState } from 'react';
import './App.css';

const App = () => {
 const [input , setinput] = useState('');
 
 const clickHandler=(event)=>{
    setinput((perviousinput) => perviousinput + event.target.textContent);
 };

 const clearDisplay = () =>{
    setinput('');
 };

 const calculate = () =>{
    try{

        setinput(eval(input).toString())
    }catch(error){
        setinput('')
    }
 }

  return (
    <div className='calc'>
      <input type="text" value={input}  />
      <div>
        <button onClick={clickHandler}>7</button>
        <button onClick={clickHandler}>8</button>
        <button onClick={clickHandler}>9</button>
        <button onClick={clickHandler}>/</button>
      </div>

      <div>
        <button onClick={clickHandler}>4</button>
        <button onClick={clickHandler}>5</button>
        <button onClick={clickHandler}>6</button>
        <button onClick={clickHandler}>*</button>
      </div>

      <div>
        <button onClick={clickHandler}>1</button>
        <button onClick={clickHandler}>2</button>
        <button onClick={clickHandler}>3</button>
        <button onClick={clickHandler}>+</button>
      </div>

      <div>
        <button onClick={clickHandler}>0</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={clickHandler}>-</button>
      </div>
    </div>
  );
};

export default App;
