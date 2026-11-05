import React, { useState } from 'react';
import './styles/Login.css'; 
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate("/dashboard")
  };

  return (
    <div className="halo container-fluid">
      <div className="row min-vh-100">
        
        <div className="kiri col-md-5 text-white d-flex flex-column justify-content-center p-5">
          <h1 className="h1-kiri fs-1 fw-bold">HYMAP</h1>
          <p className="p-kiri fst-italic">Hydro Management Application</p>
        </div>

        <div className="kanan col-md-7 bg-white text-dark d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-4">Silakan Login terlebih dahulu</h3>

          <form className="w-100" style={{ maxWidth: '400px' }} onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-pill"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control rounded-pill"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="w-100 btn-custom">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;