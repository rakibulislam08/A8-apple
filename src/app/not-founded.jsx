import Link from 'next/link';
import React from 'react';

const NotFoundedPage = () => {
    return (
        <div>
            <h1 className='text-7xl text-blue-500'>This page was Not Founded</h1>
            <Link href={"/"}>
            <button className='btn btn-primary mt-5'>Back To Home </button></Link>
        </div>
    );
};

export default NotFoundedPage;