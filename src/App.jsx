import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../src/features/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Resux tool kit with React</h1>
      <p> counter value is {count}</p>
      <button type="button" onClick={() => dispatch(increment())}>
        incrment
      </button>
      <br />
      <button type="button" onClick={() => dispatch(decrement())}>
        decremnt
      </button>
      <br />

      <button type="button" onClick={() => dispatch(incrementByAmount(5))}>
        incrment by amount
      </button>
    </>
  );
}

export default App;
