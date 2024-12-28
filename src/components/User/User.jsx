import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border : '1px solid green',
        padding:'10px',
        margin : '10px',
        borderRadius : '15px',
    }
    return (
        <div style={userStyle}>
            <h2>{id} : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`}>
            <button className="bg-gray-200 rounded-xl p-2 hover:bg-blue-400">Show Details</button>
            </Link>
        </div>
    );
};

export default User;