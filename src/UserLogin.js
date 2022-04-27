import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    let [username, setUsername] = useState("");
    
    return (
        <div className="user-login">
            <form onSubmit={(e) => {
                e.preventDefault();
                auth.signin(username);
                navigate("/");
                console.log("Form submitted.");
            }}>
                <div>
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    /> <br />
                </div>

                <button type="submit">Log-In</button>
            </form>

            {/* <p>Welcome { username }</p> */}
        </div>
    );
}

export default UserLogin;