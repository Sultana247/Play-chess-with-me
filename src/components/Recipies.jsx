import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Recipies = () => {
    const [recipies, setRecipies]=useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipies(data))
    },[])
    return (
        <div className='container mx-auto lexend-font '>
            <div className='text-center'>
                <h3 className='font-bold text-[40px] mt-[100px] mb-[24px]'>Our Recipes</h3>
                <p className='text-[#150B2B99] text-lg mb-[48px]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />urna volutpat curabitur elementum mauris aenean neque. </p>
                {/* cards */}
                <div className='flex'>
                    <div className='w-2/3'>
                        <div className='grid grid-cols-2  gap-6'>
                        {
                        recipies.map((recipe, idx)=><Recipe key={idx} recipe={recipe}></Recipe>)
                        }
                    </div>
                    </div>
                    <div className='w-1/3'>
                        <h3>Want to cook</h3>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Recipies;