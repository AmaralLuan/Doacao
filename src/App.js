import './App.css';
import Login from './Pages/Login/Login';
import Donations from './Pages/Donations/Donations';
import Register from './Pages/Register/Register';
import RegisterDonate from './Pages/RegisterDonate/RegisterDonate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/donations" component={Donations} />

        <Route exact path="/donate" component={RegisterDonate} />

        <Route exact path="https://doacaoteste.netlify.app/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
