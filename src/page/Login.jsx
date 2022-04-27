import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../css/auth.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/users";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    login(form)
    .then((response) => {
      localStorage.setItem("token", response.data.data)
      localStorage.setItem("users", JSON.stringify(response.data.status));
      const check =
        response.data.data === null
          ? alert("email or password is wrong")
          : navigate("/");
      return check;
    })
    .catch((err) => {
      alert(err)
    });
  };
  return (
    <>
      <div className="background">
        <Background />
        <div className="jumbotron">
          <h3>Welcome</h3>
          <h6>Log in into your exiting account</h6>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <div className="titleInput">E-mail</div>
              <input
                type="email"
                className="input"
                placeholder="  examplexxx@gmail.com"
                onChange={(e) => setform({ ...form, email: e.target.value })}
              />
              <div className="titleInput">Password</div>
              <input
                type="password"
                className="input"
                placeholder="  Password"
                onChange={(e) => setform({ ...form, password: e.target.value })}
              />
            </div>
            <div className="check">
              <input type="checkbox" className="checkbox" />
              <div className="text">I agree to terms & conditions</div>
            </div>
            <button type="submit" className="button btn-primary">
              Login Account
            </button>
          </form>
          <div className="forget">
            <Link to="/register">Forgot Password ?</Link>
          </div>
          <div>
            <small className="txt">Don’t have an account?</small>
            <small className="link">
              <Link to="/register">Sign Up</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
