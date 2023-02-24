import React from 'react';
import { PaystackButton } from 'react-paystack';
import '../components/homeLayout.css';
import { useStoreContext } from '../contexts/StoreContext'

const Paystackinterface = ({ email }) => {
    const { closeModal, totalPrice } = useStoreContext(); 
  // Paystack configuration options
  const publicKey = 'pk_test_4aad205c107e2c3b0626eb0753ac582a19f7d005';
  const amount = totalPrice * 10000; // amount in kobo (NGN 10,000)
  const metadata = {
    custom_fields: [
      {
        display_name: "Full Name",
        variable_name: "full_name",
        value: "John Doe"
      }
    ]
  };

  // Paystack onSuccess callback function
  const onSuccess = (reference) => {
    console.log(reference);
    // Perform necessary actions on success
    closeModal()
  };

  // Paystack onClose callback function
  const onClose = () => {
    console.log('Payment closed');
    // Perform necessary actions on close
   
  };

  // Paystack onError callback function
  const onError = (error) => {
    console.error(error);
    // Perform necessary actions on error
  };

  // Render the PaystackButton component
  return (
    <PaystackButton
      text="Make Payment"
      className="paystack-button"
      callback={onSuccess}
      onClose={onClose}
      disabled={false}
      embed={false}
      reference={Math.floor(Math.random() * 1000000000 + 1)}
      email={email}
      amount={amount}
      publicKey={publicKey}
      metadata={metadata}
      channels={['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']}
      currency="NGN"
      plan={null}
      quantity={null}
    />
  );
};

export default Paystackinterface;