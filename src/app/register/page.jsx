'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register,
        handleSubmit, formState: { errors }} = useForm()

    const hundleReg = (data) => {
        const {name, number, email, Password} = data;
        console.log(name, number,email, Password);

    }
    return (

        <div className='container mx-auto flex justify-center items-center min-h-[100vh] mt-5 mb-5 bg-slate-100'>
            <div className='p-5 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-4'>Register Your Account</h2>

                <form className='space-y-3 ' onSubmit={handleSubmit(hundleReg)}>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Name</legend>
                        <input type="name" className="input" placeholder="Type here name" {...register("name", { required: true })} />

                        {errors.name && <span>This field is required</span>}
                    </fieldset>

                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Mobile Number</legend>
                        <input type="number" className="input" placeholder="Type here Number" {...register("number", { required: true })} />

                        {errors.number && <span>This field is required</span>}
                    </fieldset>

                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Email</legend>
                        <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />

                        {errors.email && <span>This field is required</span>}
                    </fieldset>

                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend ">Password</legend>
                        <input type="Password" className="input" placeholder="Type here Password" {...register("Password", { required: true })} />

                        {errors.password && <span>This field is required</span>}
                    </fieldset>
                    <button className='btn bg-black text-white w-full'>Register</button>
                </form>
            </div>

        </div>

    );
};

export default RegisterPage;