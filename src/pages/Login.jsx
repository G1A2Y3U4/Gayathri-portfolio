import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="content">
        <h1>Signin to your PopX account</h1>

        <p style={{ color: "#777" }}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="form-group">
          <label>Email Address</label>
          <input
            className="input-box"
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="input-box"
            placeholder="Enter password"
          />
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
