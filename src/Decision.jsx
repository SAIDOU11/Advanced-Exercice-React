import { useState } from 'react';

const Decision = ({ children }) => {
  const [goingOut, setGoingOut] = useState(false);

  const toggleGoingOut = () => {
    setGoingOut((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleGoingOut}>Change Mind</button>
      {children(goingOut)}
    </div>
  );
};

export default Decision;
