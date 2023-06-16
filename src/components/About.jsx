/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
    return (
        <div className='p-40 text-4xl flex flex-col align-center text-center justify-center'>
            <h1>About</h1>
            <div className='flex flex-col m-10 text-blue-500'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
};

export default About;
