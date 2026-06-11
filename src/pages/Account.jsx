function Account() {
  return (
    <div className="mobile-container">
      <div className="content">

        <h2>Account Settings</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px"
          }}
        >
          <img
            src="https://i.pravatar.cc/100"
            alt=""
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%"
            }}
          />

          <div>
            <h3 style={{ margin: 0 }}>Marry Doe</h3>
            <p>marry@gmail.com</p>
          </div>
        </div>

        <p style={{ marginTop: "20px" }}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Sed diam nonumy eirmod tempor.
        </p>
      </div>
    </div>
  );
}

export default Account;
