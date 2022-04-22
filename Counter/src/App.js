import './App.css';
import Counter from './components/Counter';

function App() {

  var initial=0
  return (
    <div className="App">
      <Counter initial={initial} />
    </div>
  );
}

export default App;
