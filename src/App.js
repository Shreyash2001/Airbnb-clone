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
import Favorites from './Favorites';
import SearchByDate from './SearchByDate';
import Summary from './Summary';

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

      <Route path="/date/search/">
      <SearchByDate />
      </Route>

      <Route path="/favorites">
      <Favorites />
      </Route>

      <Route path="/host/summary/:id">
      <Summary />
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
