import { useParams } from "react-router-dom";
import billgates from "./images/billgates.jpg";
import stevejobs from "./images/stevejobs.jpg";

const Profile = () => {
    let {username} = useParams();
    if(username === "billgates") {
      return (
        <div className="profile">
          <h1>Credits goes to Mr. Bill Gates</h1>
          <img src= {billgates} alt="" />
        </div>
      )
    }
    else if(username === "stevejobs") {
      return (
        <div className="profile">
          <h1>Credits goes to Mr. Steve Jobs</h1>
          <img src= {stevejobs} alt="" />
        </div>
      )
    }
}

export default Profile;