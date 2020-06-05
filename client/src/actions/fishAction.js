import {
  GET_FISHES,
  ADD_FISH,
  FISHES_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FISH,
  DELETE_FISH,
} from './types';

export const getFishes = () => async (dispatch) => {
  try {
    setFishesLoading();
    const res = await fetch('http://localhost:5000/fishes');
    const data = await res.json();
    dispatch({ type: GET_FISHES, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const addFish = (fish) => async (dispatch) => {
  try {
    setFishesLoading();
    const res = await fetch('http://localhost:5000/fishes', {
      method: 'POST',
      body: JSON.stringify(fish),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({ type: ADD_FISH, payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const updateFish = (fish) => async (dispatch) => {
  try {
    setFishesLoading();
    const res = await fetch(`http://localhost:5000/fishes/${fish.id}`, {
      method: 'PATCH',
      body: JSON.stringify(fish),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_FISH,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteFish = (id) => async (dispatch) => {
  try {
    setFishesLoading();
    await fetch(`http://localhost:5000/fishes/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_FISH,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
export const setCurrent = (fish) => {
  return {
    type: SET_CURRENT,
    payload: fish,
  };
};
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
export const setFishesLoading = () => {
  return {
    type: FISHES_LOADING,
  };
};
