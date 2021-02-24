import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './SearchPage';
import Host from './Host';
import LoginPage from './LoginPage';
import Register from './Register';
import HostedPlaceDetails from './HostedPlaceDetails';

function App() {
  return (
    
    <div className="app">
    <Router>
    <Header />
    <Switch>
      
      <Route path="/register">
      <Register />
      </Route>

      <Route path="/login">
      <LoginPage />
      </Route>

      <Route path="/host/:id">
      <HostedPlaceDetails />
      </Route>

      <Route path="/host">
      <Host />
      </Route>
      
      <Route path="/search">
      <SearchPage />
      </Route>

      <Route path="/">
      <Home />
      </Route>
      
      </Switch>
      <Footer />
      </Router>
    </div>
    
  );
}

export default App;
