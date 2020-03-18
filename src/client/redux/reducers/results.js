import { type as findResultsType } from "./../actions/findResults";
const defaultState = {
  results: [
    {
      id: 4006,
      title: "matrix"
    }
  ]
};

function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case findResultsType: {
      console.log(action.payload);

      return {
        results: action.payload.results
      };

      //return [...state, action.payload.results];
    }
    default:
      return state;
  }
}

export default reducer;
