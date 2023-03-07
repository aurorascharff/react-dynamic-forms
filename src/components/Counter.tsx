import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Button type="button" onClick={() => setCount(count => count + 1)}>
          count+
        </Button>
        <div>{count}</div>
      </div>
    </div>
  );
};
export default Counter;
