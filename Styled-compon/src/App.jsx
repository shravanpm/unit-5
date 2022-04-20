import logo from './logo.svg';
import './App.css';

import Button from "./Components/Button"

function App() {
  return (
    <div className="App">
      <Button primary>Primary</Button>
      <Button>Default Button</Button>
      <Button border = "dotted">Dashed Button</Button>
      <Button border = "none">Text Button</Button>
    </div>
  );
}

export default App;
