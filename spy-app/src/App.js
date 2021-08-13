import './App.css';
import MyNavbar from './MyNavbar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
