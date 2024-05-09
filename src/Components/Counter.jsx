
import '../Components/Counter.css';

import { useState } from 'react';

const Counter = ()=>{

    const [count, setCount] = useState(0);

    return(
        <div className="container">
            <h2 className="heading">Counter App</h2>
            <p className="counter">Count: {count}</p>

            <div className="btns">

                <button type="button" className='increment' 
                onClick={()=>{setCount(count+1)}}>
                Increment
                </button>

                <button type="button" className='decrement'
                onClick={()=>{setCount(count-1)}}>
                Decrement
                </button>
                
            </div>
        </div>
    )
}

export default Counter;