import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../css/auth.css";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/users";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    repassword: "",
    gambar: "",
    isAgree: "",
    level: 1,
    isActive: 1,
  });

  const registerData = async () => {
    if (form.password !== form.repassword) {
      alert("Password harus sama!");
    }

    const bodyFormData = new FormData();

    for (const key in form) {
      bodyFormData.append(key, form[key]);
    }
    register(bodyFormData)
      .then((response) => {
        console.log(response)
        if (response.data.status == "success") {
          alert("register success");
          return navigate("/login");
        } else if (response.data.status == "error") {
          alert(response.data.error.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="background">
        <Background />
        <div className="jumbotron">
          <h3>Let’s Get Started !</h3>
          <h6>Create new account to access all features</h6>
          <div className="form-group">
            <div className="titleInput">Photo</div>
            <input
              type="file"
              className="input"
              accept="image/png, image/jpeg"
              onChange={(e) => setForm({ ...form, gambar: e.target.files[0] })}
            />
            <div className="titleInput">Name</div>
            <input
              type="text"
              className="input"
              placeholder="  Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div className="titleInput">Email address*</div>
            <input
              type="email"
              className="input"
              placeholder="  Enter email address"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <div className="titleInput">Phone Number</div>
            <input
              type="number"
              className="input"
              placeholder="  08xxxxxxxxxx"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <div className="titleInput">Create New Password</div>
            <input
              type="password"
              className="input"
              placeholder="  Create New Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <div className="titleInput">New Password</div>
            <input
              type="password"
              className="input"
              placeholder="  New Password"
              onChange={(e) => setForm({ ...form, repassword: e.target.value })}
            />
          </div>
          <div className="check">
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) => setForm({ ...form, isAgree: e.target.value })}
            />
            <div className="text">I agree to terms & conditions</div>
          </div>
          <button
            type="submit"
            className="button btn-primary"
            onClick={registerData}
          >
            Register Account
          </button>
          <div>
            <small className="txt">Already have account?</small>
            <small className="link">
              <Link to="/login">Log in Here</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
