import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-[50px] flex-1 lexend-font text-center text-white'>
            <div className='bg-[url(../../images/realBack.png)] max-w-full bg-center rounded-[12px] h-[600px] bg-no-repeat py-[100px] px-[60px]'>
                <h3 className='font-bold text-[50px] text-white '>Discover an exceptional cooking class tailored for you!</h3>
                <p className='text-lg mt-[24px]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='font-semibold text-2xl flex gap-6 justify-center mt-[40px]'>
                    <button className='text-black py-[20px] px-[30px] bg-[#0BE58A] rounded-[50px]'>Explore Now</button>
                    <button className='text-white py-[20px] px-[30px] border border-white  rounded-[50px]'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;