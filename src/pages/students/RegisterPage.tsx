import React, { useState, useEffect } from 'react';
import Header from '../../components/students/header';
import Footer from '../../components/common/Footer';
import InfoRegisterForm from '../../components/students/InfoRegisterForm';

const RegisterPage = () => {


    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div >
                <InfoRegisterForm />
            </div>



            <Footer />
        </div>
    );
};

export default RegisterPage;
