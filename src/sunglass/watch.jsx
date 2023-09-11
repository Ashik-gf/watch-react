import React from 'react';

const Watch = ({ashik, watchGetCart}) => {
    // console.log(ashik)
    const {name,model,price,brand}=ashik
    return (
        <div className="card  w-full bg-slate-500">
            <div className='border-2 border-green-600 rounded-lg my-2 w-[300px] h-[200px]'>
            <h3>Name: ${name}</h3>
            <p>Model: ${model}:</p>
            <p>Price: ${price}</p>
            <p>Brand: ${brand}</p>
            <button onClick={()=>watchGetCart(ashik)} className='bg-gray-500 p-2 rounded-md'>Perches</button>
        </div>
        </div>
    );
};

export default Watch;