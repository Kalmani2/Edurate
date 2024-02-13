import './App.css';
import Home from './Components/Home';
import {checkForToxicity} from './functions.js';

function App() {
  return (
    <div className="App">
      <Home />
      <h1>Testing the function</h1>
    </div>
  );
}

export default App;
