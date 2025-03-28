import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post("https://reqres.in/api/login", {
          email,
          password,
        });
  
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
  
        // Navigate to User List Page
        navigate("/users");
  
      } catch (error) {
        setError("Invalid email or password. Please try again.");
      }
    };
    return(
        <div className="form-container">
        <h1>Login to EmploySync</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
   <br></br>
          <div>
            <label>Password:</label><span></span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br></br>
          <button type="submit">Login</button>
  
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    );
}
export default LoginPage;