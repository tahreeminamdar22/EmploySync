import React from "react";
import landingImg from "../assets/landingimg.png";  // Import the image
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  }
    return (
        <div className="landing-page">
            <img src={landingImg} alt="Landing Page" height="250px" width="500px" />
            <h1>Welcome To EmploySync</h1>
            <h2>Sync. Manage. Empower.</h2>
            <button type="submit" onClick={handleNavigation}>Empowering Teams, One Sync at a Time.</button>
        </div>
    );
}


export default LandingPage;
