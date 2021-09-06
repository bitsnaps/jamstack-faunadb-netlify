import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <HashRouter>
    <Header />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
