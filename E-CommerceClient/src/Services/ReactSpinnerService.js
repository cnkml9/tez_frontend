import React, { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  
  return (
    <div
      style={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding:'1000px',
        backdropFilter:'blur(5px)'
      }}
    >
      <TailSpin
        color="#000000"
        height={50}
        width={50}
        timeout={5000} // Spinner'ın maksimum süresi (opsiyonel)
      />
    </div>
  );
};

export default Loader;
