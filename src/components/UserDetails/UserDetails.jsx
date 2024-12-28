import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {id,name,username, email,address, phone, website, company} = user;
    return (
        <div>
            <h2>Details about user</h2>
            <p>{id} . {name} : {username}</p>
            <p>{email}</p>
            <p><small>{address.street}, {address.city}, {address.zipcode}</small></p>
            <p>{phone}</p>
            <p><small>{website}</small></p>
            <p>{company.name}</p>
        </div>
    );
};

export default UserDetails;