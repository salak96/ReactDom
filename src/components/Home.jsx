/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React from 'react';
const Home = () => {
    return (
        <div className='font-bold p-40 text-4xl flex flex-col align-center text-center justify-center'>
            <h1>Hello Lambang</h1>
            <div className='flex flex-col m-10 text-red-500'>
                <Link to='/about'>About</Link>
                <div className='flex flex-col m-10 text-blue-500'>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
