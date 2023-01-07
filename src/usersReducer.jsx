const usersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return { ...state, users: action.payload }
    default:
      break
  }
}

export default usersReducer