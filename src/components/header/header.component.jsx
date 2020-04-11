import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    {/* <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link> */}
    <Link className="logo-container" to='/'>
        The Tribe
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        BOUTIQUE
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          DECONNEXION
        </div>
      ) : (
        <Link className='option' to='/signin'>
          CONNEXION
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
//Penser à regler le probleme du panier quand il est hors ligne

//Fonction redux qui permet d'aller recuperer la valeur du current User dans dans le user Reducer
//Les noms user et cart sont dans le rootreducer ils representent chacun le reducer correspondant
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
