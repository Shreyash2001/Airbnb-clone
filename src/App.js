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
import ExperienceType from './HostExperience/ExperienceType';
import ExperienceLocation from './HostExperience/ExperienceLocation';


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

      <Route path="/experiences/location">
      <ExperienceLocation />
      </Route>

      <Route path="/experiences/experience-type">
      <ExperienceType />
      </Route>

      <Route path="/experiences/host-onboarding">
      <Header />
      <HostOnboarding />
      </Route>

      <Route path="/experiences/hostonline">
      <HostOnline />
      <Footer />
      </Route>

      <Route path="/experiences/online">
      <Header />
      <Experiences />
      <Footer />
      </Route>

      <Route path="/date/search/">
      <Header />
      <SearchByDate />
      <Footer />
      </Route>

      <Route path="/favorites">
      <Header />
      <Favorites />
      <Footer />
      </Route>

      <Route path="/host/summary/:id">
      <Header />
      <Summary />
      <Footer />
      </Route>

      <Route path="/host/:id">
      <Header />
      <HostedPlaceDetails />
      <Footer />
      </Route>

      <Route path="/host">
      <Header />
      <Host />
      <Footer />
      </Route>
      
      <Route path="/search">
      <Header />
      <SearchPage />
      <Footer />
      </Route>

      <Route path="/">
      <Header />
      <Home />
      <Footer />
      </Route>
      
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
