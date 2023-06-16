/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React from 'react';
import Banner from './layouts/Banner';
const About = () => {
    return (
        <div className='font-bold p-40 text-4xl flex flex-col align-center text-center justify-center'>
            <Banner />
            <h1 className='text-red-500'>About</h1>
            <div className='flex flex-col m-10 text-blue-500'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
};

export default About;
