import { useState } from 'react'
import './App.css'
import AddEmployee from './components/AddEmployee'
import ShowEmployeeDetails from './components/ShowEmployeeDetails'

function App() {
  const [show,setShow] = useState(false)
 
  return (
    <div className="App">
      <AddEmployee />
      <button onClick={()=>{setShow(!show)}}>
        {show === true ? "Hide EmployeeData" : "Show EmployeeData"}
      </button>
      {show === true ? <ShowEmployeeDetails/> : null}
    </div>
  )
}

export default App
