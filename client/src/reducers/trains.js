const trainsReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case "FETCH_TRAINS":
        return {...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export default trainsReducer;
  