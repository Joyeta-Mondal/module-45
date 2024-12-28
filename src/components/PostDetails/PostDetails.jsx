import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoback = ()=>{
        navigate(-1);
    }
    const {id, userId, title, body} = post;
    return (
        <div>
            <h2>{id} : {title} - {userId}</h2>
            <p><small>{body}</small></p>
            <button onClick={handleGoback} className="bg-gray-200 rounded-xl p-2 mt-2 hover:bg-blue-400">Go Back</button>
        </div>
    );
};

export default PostDetails;