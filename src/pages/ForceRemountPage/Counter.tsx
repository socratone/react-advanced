import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{count}</div>;
};

export default Counter;
