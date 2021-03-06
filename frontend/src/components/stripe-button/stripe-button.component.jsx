import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

//Creation du bouton de paiement stripe
//Le prix étant en centimes, le prix reel sera le prix * 100
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2zlnzWLjO3Fbw6FE2wDwJEdJ00kCtvcsyU';

  const onToken = token => {
    axios({
       url: 'payment',
       method: 'post',
       data: {
         amount: priceForStripe,
         token: token
       }
    })
    .then((response) => {
      console.log(response);
      alert('Paiement reussi');
    }, (error) => {
      console.log(error);
      alert('Echec de paiement, merci de verifier vos informations.');
    });
  };

  return (
    <StripeCheckout
      label='Paiement'
      name='The TRIBE Store Ltd.'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/zGBNQxp/logo.png'
      description={`Le total est $${price}`}
      amount={priceForStripe}
      panelLabel='Paiement'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
