import './App.css';
import MyNavbar from './MyNavbar';
import Home from './Home';
import BTCTicker from './BTCTicker';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="content">
        <Home />
      </div>
      <BTCTicker />
    </div>
  );
}

export default App;
