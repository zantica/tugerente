import axios from "axios";
export const GET_CHARS = "GET_CHARS";
export const SEARCH_CHAR = "SEARCH_CHAR";
export const NEXT_PAGE = "NEXT_PAGE";

export function getChars() {
  return function (dispatch) {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        dispatch({
          type: GET_CHARS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function searchChar(name) {
  return function (dispatch) {
    axios
      .get("https://rickandmortyapi.com/api/character/?name=" + name)
      .then((res) => {
        dispatch({
          type: SEARCH_CHAR,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function nextPage(page) {
  return function (dispatch) {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((res) => {
        dispatch({
          type: NEXT_PAGE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
