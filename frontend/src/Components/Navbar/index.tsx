import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <h1>M2</h1>
      <div className="buttons">
        <span className="cp-btn">Create Profile</span>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
