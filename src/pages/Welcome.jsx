import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "100%",
          padding: "24px",
          boxSizing: "border-box"
        }}
      >
        <h1>Welcome to PopX</h1>

        <p style={{ color: "#777" }}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <br />
        <br />

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
