import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div>
            <h3>All Posts : {posts.length}</h3>
            <div className="posts">
                {
                    posts.map((post,id) => <Post key={id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;