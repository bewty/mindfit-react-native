const initialState = 'https://www.youtube.com/watch?v=kffacxfA7G4';

export default function(state = initialState, action) {
  console.log('reducer fetchmediaurl', action.payload);
  switch (action.type) {
  case 'FETCH_MEDIA_URL':
    return action.payload;
  }
  return state;
}
