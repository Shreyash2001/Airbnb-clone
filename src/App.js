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
import Experiences from './Experiences';
import HostOnboarding from './HostOnboarding';
import HostOnline from './HostOnline';

function App() {
  return (
    
    <div className="app">
    <Router>
    
    <Switch>
      
      <Route path="/register">
      <Register />
      </Route>

      <Route path="/login">
      <LoginPage />
      </Route>

      <Route path="/experiences/host-onboarding">
      <Header />
      <HostOnboarding />
      </Route>

      <Route path="/experiences/hostonline">
      <HostOnline />
      </Route>

      <Route path="/experiences/online">
      <Header />
      <Experiences />
      </Route>

      <Route path="/date/search/">
      <Header />
      <SearchByDate />
      </Route>

      <Route path="/favorites">
      <Header />
      <Favorites />
      </Route>

      <Route path="/host/summary/:id">
      <Header />
      <Summary />
      </Route>

      <Route path="/host/:id">
      <Header />
      <HostedPlaceDetails />
      </Route>

      <Route path="/host">
      <Header />
      <Host />
      </Route>
      
      <Route path="/search">
      <Header />
      <SearchPage />
      </Route>

      <Route path="/">
      <Header />
      <Home />
      </Route>
      
      </Switch>
      <Footer />
      </Router>
    </div>
    
  );
}

export default App;
