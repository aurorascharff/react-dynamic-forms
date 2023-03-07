import Button from '@mui/material/Button';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Button
          type="button"
          onClick={() => {
            return setCount(count => {
              return count + 1;
            });
          }}
        >
          count+
        </Button>
        <div>{count}</div>
      </div>
    </div>
  );
};
export default Counter;
