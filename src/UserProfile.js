import { useAuth } from "./auth"
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout()
        navigate("/")
    } 
  return (
    <div className="userprofile">
        Welcome {auth.user}
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile
