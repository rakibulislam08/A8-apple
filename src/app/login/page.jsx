'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {register, handleSubmit, formState:{errors}}=useForm()

        const handleLogin = (data)=>{
            // console.log(data);
            
        }

    return (
        <div className='container mx-auto flex justify-center items-center min-h-[80vh] mt-5 mb-5 bg-slate-100'>
            <div className='p-5 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Login Your Account</h2>

                <form className='space-y-3' onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Email</legend>
                        <input type="email" className="input" placeholder="Email"  {...register("email" ,{ required: true })}/>
                        {errors.email && <span className='text-red-700'>This field is required</span>}
                    </fieldset>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Password</legend>
                        <input type="Password" className="input" placeholder="Type here Password" {...register("password",{ required: true })} />
                        {errors.password && <span className='text-red-700'>This field is required</span>}
                    </fieldset>
                    <button className='btn bg-black text-white w-full'>Login</button>
                </form>
                <p className='p-4 text-center'>If don,t have a account? <Link href={'register'} className='text-blue-700 '>register</Link></p>
            </div>


        </div>
    );
};

export default LoginPage;