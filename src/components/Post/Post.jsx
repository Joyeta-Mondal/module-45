import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post ;
    const PostStyle = {
        border : '1px solid red',
        padding:'10px',
        margin : '10px',
        borderRadius : '15px',
}

    const navigate = useNavigate();
    const handleShowPostDetails = ()=> {
        navigate(`/post/${id}`);
    }
    
    return (
        <div style={PostStyle}>
            <h2>{id} : {title}</h2>
            {/* <Link to={`/post/${id}`}> */}
            <button onClick={handleShowPostDetails} className="bg-gray-200 rounded-xl p-2 mt-2 hover:bg-blue-400">Show Details</button>
            {/* </Link> */}
        </div>
    );
};

export default Post;