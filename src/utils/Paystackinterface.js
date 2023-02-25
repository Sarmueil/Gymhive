import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import '../components/homeLayout.css';
import { useStoreContext } from '../contexts/StoreContext'
import { useNavigate } from 'react-router-dom';

const Paystackinterface = ({ email, username }) => {
    const Navigate = useNavigate();
    const { closeModal, totalPrice, setIsPaodSuccessful } = useStoreContext();

    const payStackConfig = {
        reference: Math.floor(Math.random() * 1000000000 + 1),
        email: email,
        amount: totalPrice * 100,
        publicKey: 'pk_test_4aad205c107e2c3b0626eb0753ac582a19f7d005',
        fullname: username,
        channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']
    };

    const onPaystackSuccess = () => {
        closeModal()
        Navigate(`/`)
        setIsPaodSuccessful(true) 
    };

    const onPaystackClose = () => {
        Navigate(`/`)
    };

    const initializePaystackPayment = usePaystackPayment(payStackConfig);

    const handlePayment = () => {
        return initializePaystackPayment(
            onPaystackSuccess,
            onPaystackClose
        )
    }
    return (
        <button className="paystack-button" onClick={() => handlePayment()}>Make Payment</button>
    );
};

export default Paystackinterface;
