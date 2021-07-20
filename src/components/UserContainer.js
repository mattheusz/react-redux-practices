import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../redux/index";

function UserContainer() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);
    useEffect(() => {
        console.log(userData, 1)
        dispatch(fetchUsers())
    }, []);

    return (
        userData.loading ? (
            <h2>Loading</h2>
        ) : userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            <div>
                <h2>Users List</h2>
                <div>
                    {userData &&
                        userData.users &&
                        userData.users.map(user => <p>{user.name}</p>)}
                </div>
            </div>
        )
    );
}

export default UserContainer;