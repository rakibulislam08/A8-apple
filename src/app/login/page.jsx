import React from 'react';

const LoginPage = () => {
    return (
        <div className='container mx-auto flex justify-center mt-5 mb-5 '>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                <legend className="fieldset-legend font-bold text-xl">Login Your Account</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <p className=''>If you don,t have account? <span className='text-blue-500'>register</span> </p>
            </fieldset>
        </div>
    );
};

export default LoginPage;