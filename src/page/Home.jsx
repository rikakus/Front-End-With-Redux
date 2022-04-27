import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLatest } from "../redux/actions/recipe";
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();

  const latest = useSelector((state) => state.latest);

  useEffect(() => {
    dispatch(getLatest());
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <div>
        {latest.isLoading === true ? (
          <h1>Loading</h1>
        ) : latest.isError === true ? (
          <h1>Error</h1>
        ) : (
          latest?.data?.data?.map((data, index) => {
            const url = process.env.REACT_APP_BACKEND_URL + "/" + data.photo;
            return (
                <Card key={index} image={url} caption={data.title} id={data.id} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
