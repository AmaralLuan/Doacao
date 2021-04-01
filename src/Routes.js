import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import Login from './Pages/Login/Login';

const Routes = () => {
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
        </Switch>
    </Router>
}

export default Routes;