import './App.css';
import './nprogress.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Character from './components/Character';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/:id" exact component={Character} />
        </Switch>
      </Router>
    </div>

  )
}

export default App;
