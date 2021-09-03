import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = ({ users, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  let history = useHistory();

  function loginHandler(e) {
    e.preventDefault();

    if (email in users) {
      if (psw === users[email][1]) {
        setLoggedIn([email, users[email][0]]);
        history.push("/home");
      } else {
        alert("Incorrect password.try again!");
      }
    } else {
      alert("SIGN UP FIRST");
    }
  }

  return (
    <div className="login">
      <div className="title">
        <h1>LOGIN</h1>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter your Password"
          value={psw}
          onChange={(e) => setPsw(e.target.value)}
        ></input>
      </div>
      <div className="buttons">
        <button
          type="submit"
          onClick={(e) => {
            loginHandler(e);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
