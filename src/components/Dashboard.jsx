import { Link } from 'react-router-dom';
import Banner from './layouts/Banner';

const Dashboard = () => {
    return (
        <div className='font-extrabold p-40 text-4xl flex flex-col align-center text-center justify-center text-slate-900'>
            <Banner />
            <h1>Dashboard</h1>
            <div className='flex flex-col m-10 text-red-700'>
            <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Dashboard;
