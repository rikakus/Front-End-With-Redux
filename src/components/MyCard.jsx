import React from "react";
import { Link } from "react-router-dom";
import style from "../css/card.module.css";
import icon from "../assets/delete.png";
import icon2 from "../assets/edit.png";
import { useNavigate } from "react-router-dom";

export default function MyCard(props) {
  const navigate = useNavigate();
  const { image, caption, id, deleted } = props;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <button className={style.backIcon} onClick={deleted}>
        <img src={icon} alt="icon" className={style.icon} />
      </button>
      <button
        className={style.backIcon}
        onClick={() => navigate(`/edit/${id}`)}
        style={{ marginLeft: "60px" }}
      >
        <img src={icon2} alt="icon" className={style.icon} />
      </button>
      <Link className={style.card} to={`/recipe/${id}`}>
        <img className={style.img} src={image} alt="Food Image" />
        <p className={style.carouselCaption}>{caption}</p>
      </Link>
    </div>
  );
}
