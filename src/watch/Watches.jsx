
import { useEffect, useState } from 'react';
import Watch from '../sunglass/watch';
import './Watch.css'

import { getStoragecart, setToLS } from '../utilite/localStorage';

const Watches = () => {
    const [watches, setWatches ]= useState([])
    const [crat, setcrat] = useState([])
    useEffect(()=>{
        fetch('watch.json')
        .then(res=>res.json())
        .then (data =>setWatches(data))
    },[])
    const watchGetCart = ashik => {
        console.log(ashik);
        const newCart = [...crat, ashik]
        setcrat(newCart)
        // setToLS(ashik.model)
        setToLS(ashik.dial_color)
        getStoragecart(ashik.dial_color)
    }
    return (
        <div className='bg-red'>
           <h1>watch</h1>
           <h4>crat: {crat.length}</h4>
          <div className="box grid grid-cols-3">
          {
            watches.map(watch=> <Watch
            key={watches.id} ashik={watch}
            watchGetCart ={watchGetCart}
            ></Watch>)
            
           }
          </div>

        </div>
    );
};

export default Watches;