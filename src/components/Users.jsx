import { Link } from "react-router-dom";

const Users = ({ state, dispatch }) => {
  const { users } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {users.map((user) => {
        return (
          <div
            style={{
              display: "flex",
              width: "30%",
              gap: 10,
              border: "1px solid black",
              marginTop: 10,
            }}
            key={user.id}
          >
            <div
              style={{
                display: "flex",
                width: "70%",
                flexDirection: "column",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 30,
              }}
            >
              <span>
                Name: {user.firstName} {user.lastName}
              </span>
              <span>Account: {user.username}</span>
              <span>
                Profile Image:{" "}
                <img
                  src={user.image}
                  alt={user.firstName}
                  style={{ height: 50 }}
                />
              </span>
            </div>

            <Link to={`/${user.id}`}>
              <button
                style={{
                  border: 0,
                  borderRadius: 50,
                  height: "50%",
                  alignSelf: "end",
                  marginRight: 30,
                  marginTop: 30,
                  backgroundColor: "green",
                  color: "white",
                }}
                onClick={() =>
                  dispatch({
                    type: "ADD_USER_DETAILS",
                    payload: {
                      id: user.id,
                      user: user.username,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      phone: user.phone,
                      email: user.email,
                      ssn: user.ssn,
                      image: user.image,
                    },
                  })
                }
              >
                View Detail
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
