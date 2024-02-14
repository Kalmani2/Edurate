import './App.css';
import Home from './Components/Home';
import {checkForToxicity} from './functions.js';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
