import { Outlet, Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
            <h1>Founders</h1>
            <div className="profile-links">
                <Link to="billgates">Bill Gates</Link>
                <Link to="stevejobs">Steve Jobs</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default About;