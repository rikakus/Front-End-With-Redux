import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/recipe.css";
import Step from "../components/stepVideo";
import { useDispatch, useSelector } from "react-redux";
import { detailRecipe } from "../redux/actions/recipe";

export default function Recipe() {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(detailRecipe(id, token));
  }, []);
  const photo = process.env.REACT_APP_BACKEND_URL + "/" + recipe.data.photo;

  return (
    <>
      <Navbar />

      <section>
        <div className="container">
          <h1 className="title">{recipe.data.title}</h1>
          <div className="content-img">
            <img src={photo} alt="Food Image" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="ingridients">
            <h2
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              Ingriedients
            </h2>

            <ul>
              {recipe && recipe.isLoading === true ? (
                <h1>Loading</h1>
              ) : recipe.isError === true ? (
                <h1>Error</h1>
              ) : (
                recipe?.data?.ingredients?.map((data, index) => (
                  <li key={index}>{data}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            Video Step
          </h2>
          <Step />
          <Step />
        </div>
      </section>
      <section>
        <div className="container">
          <form action="/#">
            <textarea placeholder="Comment :" name="comment"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Comment</h2>
          <div className="comment">
            <div className="comment-img">
              <img src="/assets/images/comment-image.png" alt="Comment Image" />
            </div>
            <div className="comment-text">
              <p>Ayudia</p>
              <p>Nice Recipe</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
