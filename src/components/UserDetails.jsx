import { useNavigate } from "react-router-dom";

const UserDetails = ({ state }) => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  const { details } = state;
  console.log(details);

  return (
    <div>
      <h2>User Details Page</h2>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default UserDetails;
