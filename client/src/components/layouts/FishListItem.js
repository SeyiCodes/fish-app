import React from 'react';
import { connect } from 'react-redux';
import { deleteFish, setCurrent } from '../../actions/fishAction';

const FishListItem = ({ fish, deleteFish, setCurrent }) => {
  const onDeleteFish = () => {
    deleteFish(fish.id);
  };
  return (
    <div
      className='card '
      style={{ width: '25rem', textAlign: 'center', marginLeft: '5rem' }}
    >
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <span>Name: </span>
          <strong>{fish.name}</strong>
        </li>
        <li className='list-group-item'>
          <span>Type: </span>
          <strong>{fish.type}</strong>
        </li>
      </ul>
      <p style={{ marginTop: '1rem' }}>
        <button
          className='btn btn-dark btn-md'
          onClick={() => setCurrent(fish)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-md' onClick={onDeleteFish}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default connect(null, { deleteFish, setCurrent })(FishListItem);
