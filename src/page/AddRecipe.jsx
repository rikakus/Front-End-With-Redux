import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/addRecipe.css";
import { addRecipe } from "../redux/actions/recipe";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    gambar: "",
    ingredients: "",
    video: "",
    isActive: 1,
    date: "2022-04-05",
    idUser: 0,
  });

  const submitForm = async () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userId = users.id;
    const token = localStorage.getItem("token");
    setForm({ ...form, idUser: userId });

    const bodyFormData = new FormData();

    for (const key in form) {
      bodyFormData.append(key, form[key]);
    }
    addRecipe(bodyFormData,token)
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "success") {
          alert("add recipe success");
          return navigate("/profile");
        } else if (response.data.status == "error") {
          alert(response.value.data.error.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div
            className="content row"
            style={{
              marginTop: "30px",
            }}
          >
            <div className="col" style={{ width: "100%" }}>
              <input
                type="file"
                accept="image/png, image/jpg"
                placeholder=""
                className="inputImage col"
                onChange={(e) =>
                  setForm({ ...form, gambar: e.target.files[0] })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="title"
                className="inputTitle col"
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="col">
              <textarea
                className="inputIngredients"
                name="ingredients"
                placeholder="ingredients"
                onChange={(e) =>
                  setForm({ ...form, ingredients: e.target.value })
                }
              ></textarea>
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="video"
                className="inputVideo"
                onChange={(e) => setForm({ ...form, video: e.target.value })}
              />
            </div>
            <div className="btn col" onClick={submitForm}>
              <input type="button" value="Post" className="button" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddRecipe;
