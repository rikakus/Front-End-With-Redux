import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MyCard from "../components/MyCard";
import { Nav, NavItem, NavLink, TabPane, Row, TabContent } from "reactstrap";
import style from "../css/profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { myRecipe, deleteRecipe} from "../redux/actions/recipe";

const MyProfile = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const recipe = useSelector((state) => state.recipe);
  const token = localStorage.getItem("token");
  const json = localStorage.getItem("users");
  const users = JSON.parse(json);
  // const url = process.env.REACT_APP_BACKEND_URL + "/" + users.photo; //http://localhost:3000/1650362622035.png
  useEffect(() => {
    dispatch(myRecipe(users, token));
  }, []);

  const photo = process.env.REACT_APP_BACKEND_URL + "/" + users.photo;
  return (
    <>
      <Navbar />
      <section>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px",
          }}
        >
          <div className={style.profileDecs}>
            <img src={photo} alt="profile" className={style.profileImg} />
            <h2 className={style.h2}>{users.name}</h2>
          </div>
        </div>
      </section>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab == "1" ? "active" : ""}
              onClick={() => setActiveTab("1")}
              style={{ color: "#666666" }}
            >
              my recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "2" ? "active" : ""}
              onClick={() => setActiveTab("2")}
              style={{ color: "#666666" }}
            >
              saved recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "3" ? "active" : ""}
              onClick={() => setActiveTab("3")}
              style={{ color: "#666666" }}
            >
              like recipe
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row style={{ margin: "20px" }}>
              {recipe.data?.map((data, index) => {
                const url =
                  process.env.REACT_APP_BACKEND_URL + "/" + data.photo;
                return (
                  <MyCard
                    key={index}
                    image={url}
                    caption={data.title}
                    id={data.id}
                    deleted={() => {
                      if (
                        window.confirm(
                          `are you sure to delete recipe = ${data.title} `
                        ) == true
                      ){
                        deleteRecipe(data.id,token)
                        .then((response)=>{
                          if(response.data.status == "success"){
                            alert("success");
                            return dispatch(myRecipe(users, token));
                          }
                        }).catch((err)=>{
                          alert(err.data.message)
                        })

                      }
                    }}
                  />
                );
              })}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row style={{ margin: "10px" }}>
              <div style={{ height: "300px" }}></div>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row style={{ margin: "10px" }}>
              <div style={{ height: "300px" }}></div>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
