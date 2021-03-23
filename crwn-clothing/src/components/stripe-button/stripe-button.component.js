import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51IYEhUL7CltrwDvGfLEsEPYHNZEJpDlNbceN5V1hve2TDVbcYHrpQt4ubWtSy1SrGyZ5E4vheMcZnK98Gn5ZyIHJ00hFw0Ehxv";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.sgv"
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
