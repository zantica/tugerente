import { GET_CHARS, NEXT_PAGE, SEARCH_CHAR } from "../actions/actions";

const initialState = {
  chars: [],
  toFilter: [],
  next: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARS:
      return {
        ...state,
        chars: action.payload,
        toFilter: action.payload,
      };
    case SEARCH_CHAR:
      return {
        ...state,
        toFilter: action.payload,
      };
    // case NEXT_PAGE:
    //   return{
    //     ...state,
    //     toFilter: state.chars.info.next
    //   }
    default:
      return state;
  }
}
