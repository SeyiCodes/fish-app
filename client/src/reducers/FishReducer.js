import {
  GET_FISHES,
  ADD_FISH,
  FISHES_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FISH,
  DELETE_FISH,
} from '../actions/types';

const intialState = {
  fishes: [],
  loading: false,
  current: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_FISHES:
      return {
        ...state,
        fishes: action.payload,
        loading: true,
      };
    case ADD_FISH:
      return {
        ...state,
        fishes: [action.payload, ...state.fishes],
      };
    case UPDATE_FISH:
      return {
        ...state,
        fishes: state.fishes.map((fish) =>
          fish.id === action.payload.id ? action.payload : fish
        ),
      };
    case DELETE_FISH:
      return {
        ...state,
        fishes: state.fishes.filter((fish) => fish.id !== action.payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FISHES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
