import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addFish, updateFish, clearCurrent } from '../../actions/fishAction';

const FishForm = ({ addFish, updateFish, clearCurrent, current }) => {
  const [input, setInput] = useState({
    name: '',
    type: '',
  });

  useEffect(() => {
    if (current !== null) {
      setInput(current);
    } else {
      setInput({
        name: '',
        type: '',
      });
    }
  }, [current]);

  const { id, name, type } = input;
  const onchange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      const newFish = {
        id,
        name,
        type,
      };
      addFish(newFish);
      clearCurrent();
    } else {
      const updatedFish = {
        id: current.id,
        name,
        type,
      };
      console.log(updatedFish);
      updateFish(updatedFish);
    }
    setInput({ name: '', type: '' });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? 'Update Fish' : 'Add Fish'}</h2>
      <input
        type='text'
        placeholder='Fish Name'
        name='name'
        value={name}
        onChange={onchange}
        className='my-3'
      />
      <input
        type='text'
        placeholder='Fish Type'
        name='type'
        value={type}
        onChange={onchange}
        className='my-3'
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Fish' : 'Add Fish'}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  fish: state.fish,
  current: state.fish.current,
});
export default connect(mapStateToProps, { addFish, updateFish, clearCurrent })(
  FishForm
);
