import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './components/Auth.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navigation />
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <PrivateRoute>
                <Home count={count} setCount={setCount} />
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

function Navigation() {
  const { currentUser } = useAuth();
  
  return (
    <nav>
      <h1>Digital Literacy</h1>
      <div>
        <Link to="/">Home</Link>
        {!currentUser ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <Logout />
        )}
      </div>
    </nav>
  );
}

// Simple Home component
function Home({ count, setCount }) {
  const handleIncrement = () => setCount(count + 1);
  const { currentUser } = useAuth();
  
  return (
    <div className="home-container">
      <h1>Welcome to Digital Literacy</h1>
      <p>You are now logged in as {currentUser?.email || 'User'}!</p>
      <div className="card">
        <button onClick={handleIncrement}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
