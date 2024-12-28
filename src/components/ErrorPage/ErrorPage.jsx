import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops!! </h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found.</h3>
                    <Link to="/"><button className="bg-gray-200 rounded-xl p-2 mt-5 hover:bg-blue-400">Go back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;