import React, { useState } from 'react'

const Counter = ({initial}) => {
        const [counter, setCounter] = useState(initial);

     function addBtn() {
       setCounter(counter + 1);
     }
     function DoubbleBtn() {
       setCounter(counter * 2);
     }
     function subBtn() {
       setCounter(counter - 1);
     }
  return (
        <div >
            <h1 className={counter === 0 ? "black" : counter % 2 === 0 ? "green" : "red"}>COUNTER:{counter}</h1>
            
            <button  onClick={addBtn}>ADD</button>
            <button  onClick={subBtn}>SUB</button>
            <button  onClick={DoubbleBtn}>DOUBBLE</button>
       
        </div>
  )
}

export default Counter