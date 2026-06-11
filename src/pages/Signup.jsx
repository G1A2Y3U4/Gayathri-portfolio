import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="content">
        <h1>Create your PopX account</h1>

        <div className="form-group">
          <label>Full Name *</label>
          <input className="input-box" />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input className="input-box" />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input className="input-box" />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input className="input-box" />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input className="input-box" />
        </div>

        <div className="form-group">
          <p>Are you an Agency?</p>

          <input type="radio" name="agency" /> Yes
          &nbsp;&nbsp;
          <input type="radio" name="agency" /> No
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;
