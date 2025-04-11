import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import "./LoginPage.css";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      // Add user's name to profile
      await updateProfile(userCredential.user, {
        displayName: name
      });
      
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      {error && <div className="error-message">{error}</div>}
      <p className="tip">Click on the button in image container to toggle between sign in and sign up</p>
      
      <div className={`cont ${isSignUp ? "s--signup" : ""}`}>
        <div className="form sign-in">
          <h2>Welcome back,</h2>
          <form onSubmit={handleSignIn}>
            <label>
              <span>Email</span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Password</span>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="submit" className="submit" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
        </div>
        
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great features of Digital Literacy!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>If you already have an account, just sign in. We've missed you!</p>
            </div>
            <div className="img__btn" onClick={toggleSignUp}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <form onSubmit={handleSignUp}>
              <label>
                <span>Name</span>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>Password</span>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="submit" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <button type="button" className="fb-btn">Join with <span>facebook</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 