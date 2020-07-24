import React from 'react';
import Loader from 'react-loader-spinner';

import './styles.scss';

const Spinner = () => {
  return (
    <div className='spinner'>
      <Loader type='Oval' color='#4261ff' height={50} width={50} />
    </div>
  );
};

export default Spinner;
