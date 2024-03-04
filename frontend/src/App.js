import './App.css';
import Home from './Pages/home/Home';
import Review from './Pages/submit_reviews/Review.js';
import {checkForToxicity} from './functions.js';

function App() {
  return (
    <div className="App">
      <Review />
    </div>
  );
}

export default App;
