/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  browserHistory
} from 'react-router-dom';

import {
  IdentityContextProvider,
  useIdentityContext,
} from 'react-netlify-identity';

import ReactGA from 'react-ga';
import withTracker from './withTracker';

import netlifyIdentity from 'netlify-identity-widget';
import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import PricingPage from 'containers/PricingPage/Loadable';
import AccountPage from 'containers/AccountPage/Loadable';
import LocationPage from 'containers/LocationPage/Loadable';
import FaqPage from 'containers/FaqPage/Loadable';

import TermsofServicesPage from 'containers/TermsofServicesPage/Loadable';
import PrivacyPolicyPage from 'containers/PrivacyPolicyPage/Loadable';

import ComingSoonPage from 'containers/ComingSoonPage/Loadable';
import BookingPage from 'containers/BookingPage/Loadable';
import IMShotPage from 'containers/IMShotPage/Loadable';
import IVDripPage from 'containers/IvDripPage/Loadable';
import CryoPage from 'containers/CryoPage/Loadable';
import SaunaPage from 'containers/SaunaPage/Loadable';
import MassagePage from 'containers/MassagePage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';
import PostPage from 'containers/PostPage/Loadable';

import Demo from 'containers/Demo/Loadable';



// New Patterns
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Page from 'components/Page';

import GlobalStyle from 'styles/global-styles';

function PrivateRoute({ component: Component, ...props }) {
  const identity = useIdentityContext();

  return identity.user ? (
    <Component {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/404',
        state: { from: props.location },
      }}
    />
  );
}

export default function App() {
  const url = 'https://thenorthstar.netlify.com/';
  return (
    <Router history={browserHistory}>
      <IdentityContextProvider url={url}>
        <Page>
          <Switch>
            <Route exact path="/" component={withTracker(HomePage)} />
            <Route exact path="/demo" component={withTracker(Demo)} />
            <Route exact path="/about" component={withTracker(AboutPage)} />
            <Route exact path="/im_shots" component={withTracker(IMShotPage)} />
            <Route exact path="/iv_drip" component={withTracker(IVDripPage)} />
            <Route exact path="/cryo_therapy" component={withTracker(CryoPage)} />
            <Route exact path="/infrared_sauna" component={withTracker(SaunaPage)} />
            <Route exact path="/massage" component={withTracker(MassagePage)} />
            <Route exact path="/pricing" component={withTracker(PricingPage)} />
            <Route exact path="/location" component={withTracker(LocationPage)} />
            <Route exact path="/faq" component={withTracker(FaqPage)} />
            <Route exact path="/booking" component={withTracker(BookingPage)} />
            <Route exact path="/coming_soon" component={withTracker(ComingSoonPage)} />
            <Route
              exact
              path="/terms_of_services"
              component={withTracker(TermsofServicesPage)}
            />
            <Route
              exact
              path="/privacy_policies"
              component={withTracker(PrivacyPolicyPage)}
            />
            <Route path="/blog/:id" component={withTracker(PostPage)} />
            <Route path="/blog" component={withTracker(BlogPage)} />
            <Route exact path="/account" component={withTracker(AccountPage)} />
            <Route path="*" component={withTracker(NotFoundPage)} />
          </Switch>
        </Page>
      </IdentityContextProvider>
      <GlobalStyle />
    </Router>
  );
}
