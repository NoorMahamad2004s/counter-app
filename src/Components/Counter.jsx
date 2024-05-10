
// functional component based implementation for counter app


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




// class component based implementation for counter app


// import { Component } from 'react';
// import '../Components/Counter.css';

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     handleIncrement = () => {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }));
//     };

//     handleDecrement = () => {
//         this.setState(prevState => ({
//             count: prevState.count - 1
//         }));
//     };

//     render() {
//         const { count } = this.state;

//         return (
//             <div className="container">
//                 <h2 className="heading">Counter App</h2>
//                 <p className="counter">Count: {count}</p>

//                 <div className="btns">
//                     <button
//                         type="button"
//                         className="increment"
//                         onClick={this.handleIncrement}
//                     >
//                         Increment
//                     </button>
//                     <button
//                         type="button"
//                         className="decrement"
//                         onClick={this.handleDecrement}
//                     >
//                         Decrement
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Counter;
