import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/pages/App';
import NotFound from './components/pages/NotFound';
import AboutUs from './components/pages/AboutUs/AboutUs.js';
import Account from './components/pages/Account/Account.js';
import Conditions from './components/pages/Conditions/Conditions.js';
import Contact from './components/pages/Contact/Contact.js';
import DontClickMe from './components/pages/DontClickMe/DontClickMe.js';
import Login from './components/pages/Login/Login.js';
import Reservations from './components/pages/Reservations/Reservations.js';
import Portfolio from './components/pages/Portfolio/Portfolio.js';
import SiteMap from './components/pages/siteMap/SiteMap.js';
import Founders from './components/pages/founders/Founders.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/account/:id" component={Account} />
    <Route path="/conditions" component={Conditions} />
    <Route path="/contact" component={Contact} />
    <Route path="/dont-click-me" component={DontClickMe} />
    <Route path="/login" component={Login} />
    <Route path="/reservations" component={Reservations} />
    <Route path="/portafolio" component={Portfolio} />
    <Route path="/sitemap" component={SiteMap} />
    <Route path="/founders" component={Founders} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
