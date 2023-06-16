import { Outlet } from "react-router-dom";
const Banner = () => {
    return (
        <div className='flex-col bg-blue-950 text-white text-center p-30 font-20 justify-center flex '>
            <p>Thank you for visiting our website!</p>
            <p>Have a nice day!</p>
            {/* Compare this snippet from src/components/About.jsx Children component */}
            <Outlet />
        </div>
    );
}

export default Banner;