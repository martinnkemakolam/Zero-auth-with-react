import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user } = useAuth0();


    return (<>

        <div>
            {JSON.stringify(user.name)}
        </div>
        <div>
            <img src={user.picture} alt="" />
        </div>
    </>
    );
};

export default Profile;