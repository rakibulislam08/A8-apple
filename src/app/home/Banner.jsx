import Image from 'next/image';
import React from 'react';
import apples from '../../Asssets/apples.png';
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div className='container mx-auto rounded-md'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={apples} className="max-w-sm rounded-lg " alt='apples'/>
                    <div>
                        <h1 className="text-5xl font-bold"> <span className='text-lime-700 font-extrabold'>Welcome</span> <br />
                        To The Apple Bazzer</h1>
                        <p className="py-4 text-slate-600">
                            Take a stroll through our website and discover your perfect apple</p>
                        <button className="btn bg-black text-white">Browse Now</button>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-rose-300 text-2xl'>
                <Marquee>New Arrivals:  Apple Iteams | Weekly Feature: healthy Food | Join the Community...</Marquee>
            </div>
        </div>
    );
};

export default Banner;