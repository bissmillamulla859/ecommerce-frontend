function Register() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Register</h2>

      <br />

      <input type="text" placeholder="Full Name" />

      <br /><br />

      <input type="email" placeholder="Email" />

      <br /><br />

      <input type="password" placeholder="Password" />

      <br /><br />

      <button>Create Account</button>
    </div>
  );
}

export default Register;