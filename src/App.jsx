import { useReducer, useEffect } from "react"
import {
  Routes,
  Route
} from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users"
import usersReducer from './usersReducer'

const App = () => {
  const [state, dispatch] = useReducer(usersReducer, {
    users: []
  })

  const fetchUser = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: 'ADD_USERS',
          payload: res.users
        })
      )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchUser()
  }, []);


  return (
    <div>
      <h1
        style={{
          textAlign: "center"
        }}
      >
        User Phone Book
      </h1>

      <Routes>
        <Route path="/" element={<Users state={state} dispatch={dispatch} />} />
        <Route path="/:id" element={< UserDetails state={state} dispatch={dispatch} />} />
      </Routes>

    </div>
  )
}

export default App