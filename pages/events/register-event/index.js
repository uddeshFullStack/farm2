import React from 'react';
import Layout from '../../layout';
import RegisterEventForm from './registerEventForm';

const RegisterEvent = () => {
    const inputFields = [
        { name: 'name', type: 'text', placeholder: 'Name', required: true },
        { name: 'phoneNo', type: 'text', placeholder: 'Phone No', required: true },
        { name: 'email', type: 'email', placeholder: 'E-mail' },
        { name: 'address', type: 'textarea', placeholder: 'Address' }
    ];

    return (
        <Layout>
            <div className='font-inter my-10 flex flex-col justify-center items-center gap-10 w-screen'>
                <div className='text-primary-colour font-bold text-7xl '>
                    Register For Event
                </div>
                <div className="">
                    <RegisterEventForm
                        inputFields={inputFields}
                        buttonText="Submit"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default RegisterEvent;
