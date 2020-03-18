import axios from "axios";
export const type = "findResults";

const API_KEY = "e93a1c5fc445460e97fc12b2ca245cb4";

export default function findResults(anio) {
  console.log(anio);
  return dispatch => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${anio}&year=${anio}&region=US&sort_by=release_date.asc`
      )
      .then(response => {
        dispatch({ type, payload: response.data });
      });
  };
  /*return {
    type,
    payload: data 
  };*/
}

/*export const fetchData = () => {
  const API_KEY = "e93a1c5fc445460e97fc12b2ca245cb4";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=e93a1c5fc445460e97fc12b2ca245cb4&primary_release_year=2010&year=2010&region=US&sort_by=release_date.asc`;

  return dispatch => {
    return axios
      .get(url)
      .then(response => {
        dispatch(findResults(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};*/

//export default findResults;

//export default findResults;

//export default findResults;
