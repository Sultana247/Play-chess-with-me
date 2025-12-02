import React from 'react';

const Recipe = ({recipe}) => {
    const {recipe_name, recipe_image, short_description, ingredients}=recipe;

    
    return (
        <div>
            <div className="card bg-base-100 w-[320px] shadow-sm p-6 text-left lexend-font">
                <figure>
                    <img className='w-[330px] h-[200px] rounded-[16px]'
                    src={recipe_image}
                    alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className="font-semibold text-[20px] mt-6">{recipe_name}</h2>
                    <p className='text-[#878787] text-[16px] mt-4'>{short_description}</p>
                    <div className='text-[#2828281A] border mt-4'></div>
                    <p className='text-[18px] mt-4 font-medium p-4'>Ingridients:{ingredients.length}
                        <span className='text-[#878787] text-[14px] '>{ingredients.map(ingridient=><li>{ingridient}</li>)}</span>
                    </p>
                    
                    <div className='text-[#2828281A] border mt-4'></div>
                    <div className='flex gap-[10px] mt-6 font-normal text-[16px] text-[#282828CC]'>
                        <p><i class="fa-regular fa-clock"></i> 30 minutes</p>
                        <p><i class="fa-solid fa-fire"></i> 600 calories</p>
                    </div>
                    <div className="card-actions mt-6">
                    <button className="btn rounded-[50px] bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;