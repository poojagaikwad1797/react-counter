import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  errors
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const error = useSelector(errors);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState();

  return (
    <div>
      <span className={styles.errors}>{error}</span><br></br>
      <span className={styles.value}>Count:{count}</span>
      <div className={styles.row}>
       <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >Decrement</button>
         <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >Increment</button>
        
        
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >Submit</button>
      </div>
    </div>
  );
}
