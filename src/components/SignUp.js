import { useState } from "react";
import "./signup.css"

const SignUp = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd1, setPswd1] = useState("");
  const [pswd2, setPswd2] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let list = { ...users };
    list[email] = [name, pswd2];
    setUsers(list);

    console.log(list, "List");
  };

  return (
    <div className="register">
      <h1>REGISTER</h1>
      <div className="inputs">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Your Password"
        value={pswd1}
        onChange={(e) => setPswd1(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Re-enter Password"
        value={pswd2}
        onChange={(e) => setPswd2(e.target.value)}
      ></input>
      </div>
      <div className="buttons">
      <button type="submit" onClick={(e) => submitHandler(e)}>
        Register
      </button>
      </div>
    </div>
  );
};

export default SignUp;
