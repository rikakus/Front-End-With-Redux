import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "../css/search.module.css";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searching } from "../redux/actions/recipe";
import orderBy from "lodash/orderBy";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();
  const data = useSelector((state) => state.search);
  const key = queryParams.get("search");
  const [search, setSearch] = useState(key);
  const [dataNew, setDataNew] = useState([]);

  const token = localStorage.getItem("token");
  const getContent = async (queryKey) => {
    const query = queryKey ? `?search=${queryKey}` : `?search=`;
    await dispatch(searching(query, token)).then(()=>{
      setDataNew(data.data);
    });
  };

  useEffect(() => {
    if (key) {
      setSearch(key);
      getContent(key);
    } else {
      getContent();
    }
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/?search=${search}`);
      getContent(search);
    }
  };

  const sortData = (props) => {
    if (props == "ASC") {
      setDataNew((prevState) => orderBy(prevState, ["title"], ["asc"]));
    } else if (props == "DESC") {
      setDataNew((prevState) => orderBy(prevState, ["title"], ["desc"]));
    }
  };

  const check = data.data === null ? "Data Not Found" : "Your Search !";

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className={style.formSearch}>
            <div className={style.icon}></div>
            <input
              type="text"
              className={style.input}
              placeholder="Search Recipe"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <h4 style={style.h4}>{check}</h4>
            <UncontrolledDropdown>
              <DropdownToggle caret style={{ color: "#2E266F",backgroundColor: "white",marginBottom: "20px"}}>
                SORT BY TITLE
              </DropdownToggle>
              <DropdownMenu>
              <DropdownItem
                  title="ASC"
                  onClick={()=>sortData("ASC")}
                  style={{ color: "#2E266F" }}
                >
                  ASC
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  title="DESC"
                  onClick={()=>sortData("DESC")}
                  style={{ color: "#2E266F" }}
                >
                  DESC
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          <div className="row list-recipe">
            {dataNew?.map((data, index) => {
              const url = process.env.REACT_APP_BACKEND_URL + "/" + data.photo;
              return (
                <Card
                  key={index}
                  image={url}
                  caption={data.title}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Search;
