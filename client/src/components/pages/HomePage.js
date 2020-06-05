import React from 'react';
import FishForm from '../layouts/FishForm';
import FishList from '../layouts/FishList';

const HomePage = () => {
  return (
    <div className='grid-2'>
      <div>
        <FishForm />
      </div>
      <div className='fishList'>
        <FishList />
      </div>
    </div>
  );
};

export default HomePage;
