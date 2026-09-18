import Image from 'next/image';
import React from 'react';
import apples from '../../Asssets/apples.png'
import backgroundImage  from "@Asssets/bckgp.jpg";

const Banner = () => {
    return (
        <div className='container mx-auto rounded-md'>
            <div
             className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage.src})`
      }}>

                {/* <Image className='w-full h-[60vh] rounded-md' src={} alt='banner' /> */}
                <div className='flex justify-around items-center  min-h-[60vh]'>
                    <div>
                        <h1 className='text-5xl font-bold text-black'> <span className='text-red-400 space-y-2'>Welcome </span><br /> To The <br />
                            <span className='text-purple-500'>Apple Store</span>
                        </h1>

                    </div>
                    <div>
                        <Image className='rounded-md' src={apples} height={300} alt='iphones' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;