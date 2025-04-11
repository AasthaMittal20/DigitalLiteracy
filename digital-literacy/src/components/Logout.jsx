import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Logout = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setError("Failed to log out");
      console.error(err);
    }
  };

  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default Logout; 