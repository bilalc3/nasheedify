import Navbar from './Navbar';
import Home from './Home';
import Artist from './Artist';
import Footer from './Footer';
import Data from './Data';
import Videos from './Videos';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {

  return (
    <Router >
      <div className="App">
        < Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              < Home />
              < Artist />
              < Data />
            </ Route>

            <Route exact path="/videos">
              < Videos /> 
            </Route>
            {/* <Route exact path="/about">
              < About />
            </Route> */}

            <Route exact path="/contact">
              < Contact />
            </Route>

          </Switch>
        </div>
        < Footer />
      </div>
    </Router>
  );
}

export default App;
