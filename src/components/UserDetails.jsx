import { useNavigate } from "react-router-dom";

const UserDetails = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }

    return (
        <div>
            <h1>User Details Page</h1>
            <button onClick={handleClick}>Go Back</button>
        </div>
    )

}

export default UserDetails