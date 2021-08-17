import './App.css';
import MyNavbar from './MyNavbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chart from './Chart';


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="content">
          <Switch>

            <Route 
            exact={true}
            path="/" 
            component={Home} />

            <Route 
            path="/chart"
            exact={true}
            component={Chart} />
              
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
