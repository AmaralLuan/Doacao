import './App.css';
import Login from './Pages/Login/Login';
import Donations from './Pages/Donations/Donations';
import RegisterDonate from './Pages/RegisterDonate/RegisterDonate';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/donations" component={Donations} />

        <Route exact path="/donate" component={RegisterDonate} />
      </Switch>
    </Router>
  );
}

export default App;
