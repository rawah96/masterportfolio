import './App.css';
import Roll from 'react-reveal/Zoom';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import First from './components/First/First';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Switch>
          <Route exact path="/masterportfolio"><First /></Route>
          <Route path="/education">Education</Route>
          <Route path="/projects">Projects</Route>
          <Route path="/contact">Contact Me</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
