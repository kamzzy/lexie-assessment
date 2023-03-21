import axios from 'axios';

const baseUrl = 'https://images-api.nasa.gov/search?q=center&media_type=image&year_start=2011&year_end=2020';
const FILTER_NASA = 'redux/searchData/FILTER_NASA';
const SHOW_DETAILS = 'redux/searchData/SHOW_DETAILS';

const initialState = [];

export const filterNasa = () => async(dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: FILTER_NASA,
    payload: response.data.collection.items,
  });
};

export const showDetails = (id) => async(dispatch) => {
  dispatch({
    type: SHOW_DETAILS,
    payload: id,
  });
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_NASA:
      return action.payload;
    case SHOW_DETAILS:
      return state.map((item) => {
        if (item.data[0].nasa_id === action.payload) {
          return {
            ...item,
            show: true,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default searchReducer;