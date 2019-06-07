const initState = {
  inputValue: '',
  data:[]
};

export default function searchReducer(state = initState, action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        inputValue: action.inputValue
      };
    case 'ANIME_SUCCESS':
      return{
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
