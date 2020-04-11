import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//Creation du bouton de paiement stripe
//Le prix étant en centimes, le prix reel sera le prix * 100
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2zlnzWLjO3Fbw6FE2wDwJEdJ00kCtvcsyU';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Paiement'
      name='The TRIBE Store Ltd.'
      billingAddress
      shippingAddress
      currency="DT"
      image='https://svgshare.com/i/CUz.svg'
      description={`Le total est DT ${price}`}
      amount={priceForStripe}
      panelLabel='Paiement'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
