import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-center mt-5 mb-5 '>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <legend className="fieldset-legend font-bold text-xl">Register Your Account</legend>

                    <label className="label">Your Name</label>
                    <input type="text" className="input" placeholder="Your Name" />

                    <label className="label">Mobile NUmber</label>
                    <input type="text" className="input" placeholder="number" />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </div>
        </div>
    );
};

export default RegisterPage;