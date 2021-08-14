import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    console.log('ere');
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51JNZZALGcZqdTByINQZdYcYWtA7NU3t3MU6VSH7IPMM6R0wIqm39aatyHtIK2qrKoyYkW2Y59BRfGUUnSYW5xaVM00oM0FTN2S';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing SRL.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceInCents}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
}

export default StripeCheckoutButton;