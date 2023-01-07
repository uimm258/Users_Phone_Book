const usersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return { ...state, users: action.payload };
    case "ADD_USER_DETAILS":
      return { ...state, details: action.payload };
    default:
      break;
  }
};

export default usersReducer;
