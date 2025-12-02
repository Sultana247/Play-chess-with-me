import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';


const Recipies = () => {
    const [recipies, setRecipies]=useState([]);
    const [wanttocooks, setWanttocook]=useState([]);
    const [cooking, setCooking]=useState([]);
    const [totaltimes, setTotaltime] = useState(0);
    const [totalcalories, setTotalcalories] = useState(0);


    useEffect(()=>{
        fetch('recipe.json')
        .then(res=>res.json())
        .then(data=>setRecipies(data))
    },[]);

    const handleWanttocook = (recipetocook)=>{
        
        const newRecipe = [...wanttocooks, recipetocook];
        setWanttocook(newRecipe);

    }

    const handlecooking = (cookingnow, calories, time)=>{
        const newcooking =[...cooking, cookingnow];
        setCooking(newcooking);
        // time count
        const timeInt=parseInt(time);
        const totalTimes=timeInt + totaltimes;
        setTotaltime(totalTimes);
        // calorie count
        const caloriesInt=parseInt(calories);
        const totalCalories=caloriesInt + totalcalories;
        setTotalcalories(totalCalories);
        


    }
    return (
        <div className='container mx-auto lexend-font '>
            <div className='text-center'>
                <h3 className='font-bold text-[40px] mt-[100px] mb-6'>Our Recipes</h3>
                <p className='text-[#150B2B99] text-lg mb-12'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />urna volutpat curabitur elementum mauris aenean neque. </p>
                {/* cards */}
                <div className='flex gap-4'>
                    <div className='w-2/3'>
                        <div className='grid grid-cols-2  gap-6'>
                        {
                        recipies.map((recipe, idx)=><Recipe key={idx} recipe={recipe} handleWanttocook={handleWanttocook}></Recipe>)
                        }
                    </div>
                    </div>
                    <div className='w-1/3 '>
                        <div className='border border-[#28282833] rounded-2xl p-8'>
                            <h3 className='font-semibold text-2xl text-[#282828]'>Want to cook: {wanttocooks.length}</h3>
                            <div className='text-[#28282826] border mt-4 mb-6 '></div>
                            <div className='text-[#878787]'>
                                <table>
                                    <thead>
                                        <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                        </tr>
                                    </thead>

                                    {
                                        wanttocooks.map((recipecook, idx)=>
                                        <tbody className='bg-[#28282808] p-0'>
                                        <tr>
                                            <td className=''>{idx + 1}</td>
                                            <td className=''>{recipecook.recipe_name}</td>
                                            <td className=''>{recipecook.preparing_time} min</td>
                                            <td className=''>{recipecook.calories} calories</td>
                                            <td className=''><button onClick={()=>handlecooking(recipecook, recipecook.calories, recipecook.preparing_time)} className="btn rounded-[50px] bg-[#0BE58A]">Preparing</button></td>
                                        </tr>
                                        </tbody>)
                                    }
                                </table>
                            </div>
                            {/* cooking */}
                            <h3 className='font-semibold text-2xl mt-8'>Currently cooking: {cooking.length}</h3>
                            <div className='text-[#28282826] border mt-4 mb-6'></div>
                            <div className='text-[#878787]'>
                                <table>
                                    <thead>
                                        <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        
                                        </tr>
                                    </thead>

                                    {
                                        cooking.map((recipecooking, idx)=>
                                        <tbody className='bg-[#28282808] p-0'>
                                        <tr>
                                            <td className=''>{idx + 1}</td>
                                            <td className=''>{recipecooking.recipe_name}</td>
                                            <td className=''>{recipecooking.preparing_time} min</td>
                                            <td className=''>{recipecooking.calories} calories</td>
                                            
                                        </tr>
                                       
                                        </tbody>)
                                    }
                                    <tbody>
                                        <tr>
                                            <td> </td>
                                            <td></td>
                                            <td>Total time = {totaltimes} min</td>
                                            <td>Total calories = {totalcalories} calories</td>
                                        </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Recipies;