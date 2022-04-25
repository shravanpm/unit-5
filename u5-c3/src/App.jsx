import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {TotalEmployeesContext, TotalEmployeesProvider} from "./Contexts/TotalEmployees"
import axios from "axios";
import {useContext} from "react";
import {Routes,Route,Router} from "react-router-dom"
import { useEffect, useState } from "react";



function App() {
  const [Data,setData] = useState([])
  const {totalEmployees,getData} = useContext(TotalEmployeesContext)
  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then(({data}) => {
      setData(data);
      
    }) 
  },[])
  getData(Data);
  console.log("sd",totalEmployees)
  console.log("Data",Data)
  return (
    <div className="App">
       
    <Navbar />
    <Routes>
    
      <Route path="/" element={<Home/>}></Route>
      <Route path="/employees" element={<EmployeeList/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/login" element={<login/>}></Route>
        
    </Routes>   
    
    </div>
    
  );
}

export default App;
/**
 * 
 * 
     <Router>
    
    
    </Router>
     
 */