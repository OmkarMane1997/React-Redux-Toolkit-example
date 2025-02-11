import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount
} from '../src/features/counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100"> {/* Centered card container */}
      <div className="card p-4 shadow text-center"> {/* Bootstrap Card */}
        <h1>Redux Toolkit with React</h1>
        <p className="fs-4">Counter value is {count}</p>
        
        {/* Increment Button */}
        <button className="btn btn-primary m-2" type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        
        {/* Decrement Button */}
        <button className="btn btn-danger m-2" type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        {/* Increment by Amount Button */}
        <button className="btn btn-success m-2" type="button" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by Amount
        </button>

         {/* Increment by Amount Button */}
         <button className="btn btn-warning m-2" type="button" onClick={() => dispatch(decrementByAmount(5))}>
         Decrement by Amount
        </button>
      </div>
    </div>
  );
}

export default App;
