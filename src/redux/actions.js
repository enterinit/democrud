export const GET_HOTDOGS = 'GET_HOTDOGS';
export const EDIT_HOTDOG = 'EDIT_HOTDOG';

export function editHotdog(data) {
  return {
    type: EDIT_HOTDOG,
    payload: data,
  };
}

export const getHotDogs = () => {
  console.log('getHotDogs');

  return (dispatch, getState) => {
    console.log('current state:', getState());
    return fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'GET_HOTDOGS', payload: data });
        window.localStorage.setItem('htds', JSON.stringify(data));
      });
  };
};
