import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='container mx-auto flex justify-center items-center min-h-[80vh] mt-5 mb-5 bg-slate-100'>
            <div className='p-5 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Login Your Account</h2>

                <form className='space-y-3'>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Email</legend>
                        <input type="email" className="input" placeholder="Email" />
                    </fieldset>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Password</legend>
                        <input type="Password" className="input" placeholder="Type here Password" />
                    </fieldset>
                    <button className='btn bg-black text-white w-full'>Login</button>
                </form>
            </div>





        </div>
    );
};

export default LoginPage;