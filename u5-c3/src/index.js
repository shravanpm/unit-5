import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TotalEmployeesProvider} from "./Contexts/TotalEmployees"
import { BrowserRouter } from "react-router-dom";
import { NewProvider } from './Contexts/NewContext';
import { PromotedProvider } from './Contexts/PromotedContext';
import { TerminatedProvider } from './Contexts/TerminatedContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <NewProvider>
    < PromotedProvider>
  <TerminatedProvider>
    <BrowserRouter>
    <TotalEmployeesProvider>
      <App />

    </TotalEmployeesProvider>


    </BrowserRouter>
    </TerminatedProvider>
  </PromotedProvider>     
    </NewProvider>
 
    
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*

*/