import './App.css';
import { Inventory } from './components/inventory';

function App() {

  var initial=0
  return (
    <div className="App">
      <Inventory initial={initial} />
    </div>
  );
}

export default App;
