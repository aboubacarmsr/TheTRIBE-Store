import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Article</span>
      </div>
      <div className='header-block'>
        <span>Nom</span>
      </div>
      <div className='header-block'>
        <span>Quantité</span>
      </div>
      <div className='header-block'>
        <span>Prix</span>
      </div>
      <div className='header-block'>
        <span>Supprimer</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: $ {total}</div>
    <div className='test-warning'>
      Carte de paiement pour test
      <br />
      4242 4242 4242 4242 - Exp: N'importe quelle date ulterieure - CVV: Random
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
