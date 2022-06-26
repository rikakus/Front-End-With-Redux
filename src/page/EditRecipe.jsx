import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/addRecipe.css";
import { detailRecipe, editRecipe } from "../redux/actions/recipe";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipe = useSelector((state) => state.detail);
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    gambar: "",
    ingredients: "",
    video: "",
    isActive: 1,
    date: "2022-04-05",
    idUser: 0,
  });
  const title = useRef({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(detailRecipe(id, token))
    title.current['title'].focus()
    title.current['title'].value = recipe.data.title;
    console.log(title.current)
    console.log(title.current)
    // ingredients.current.value = recipe.data.ingredients;
  }, []);

  const submitForm = async () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userId = users.id;
    const token = localStorage.getItem("token");
    setForm({ ...form, idUser: userId });

    const bodyFormData = new FormData();

    for (const key in form) {
      bodyFormData.append(key, form[key]);
    }

    editRecipe(id,bodyFormData,token)
      .then((response) => {
        if (response.data.status == "success") {
          alert(response.data.message);
          return navigate("/profile");
        } else if (response.data.status == "error") {
          alert(response.value.data.error.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
      console.log(form)
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
                ref={title.current}
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

export default EditRecipe;
