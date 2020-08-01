import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component';
import SpinnerComponent from './components/spinner-component/spinner-component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import './App.css';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactPage = lazy(() => import('./pages/contact/contact-page.component'));

//En mode Production, lazy et Suspense permettent de charger le contenu d'un component uniquement s'il est necessaire
//ErrorBoundary permet de détecter une erreur et d'afficher une page en consequence (test sur le home)

//NOTE : CREER UNE PAGE NOT FOUND COMPONENT POUR LES URLs INEXISTANTES
const App = ({ checkUserSession, currentUser }) => {

    useEffect(() => {
      checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
          <Header />
          <Switch> 
            <Suspense fallback={ <SpinnerComponent/> }>
              <ErrorBoundary>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/contact' component={ContactPage}/>
                <Route
                  exact
                  path='/signin'
                  render={() =>
                    currentUser ? (
                      <Redirect to='/' />
                    ) : (
                      <SignInAndSignUpPage />
                    )
                  }
                />
              </ErrorBoundary>
            </Suspense>
          </Switch>
        </div>
    );
}
//Recuperer le current user du reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
