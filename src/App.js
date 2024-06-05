import { createBrowserHistory } from 'history/cjs/history.min';
import './App.css';
import { Router } from 'react-router-dom';
import HomeTempplate from './templates/HomeTemplate/HomeTempplate';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTempplate path="/home" exact Component={Home} />
        <HomeTempplate path="/contact" exact Component={Contact} />
        <HomeTempplate path="/news" exact Component={News} />
        <Route path='/login' exact Component={Login} />
        <Route path='/register' exact Component={Register} />
        <HomeTempplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
