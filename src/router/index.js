import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import Login from "../page/Login";
import Register from "../page/Register";
import Search from "../page/Search";
import PrivateRouter from "./Private";
import Profile from "../page/MyProfile";
import AddRecipe from "../page/AddRecipe";
import Video from "../page/DetailVideo";
import Recipe from "../page/Recipe";
import EditRecipe from "../page/EditRecipe";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} /> {/*localhost:3000/*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<PrivateRouter />}>
            <Route index element={<Search />} />
          </Route>
          <Route path="/profile" element={<PrivateRouter />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="/new" element={<PrivateRouter />}>
            <Route index element={<AddRecipe />} />
          </Route>
          <Route path="/video" element={<PrivateRouter />}>
            <Route index element={<Video />} />
          </Route>
          <Route path="/recipe/:id" element={<PrivateRouter />}>
            <Route index element={<Recipe />} />
          </Route>
          <Route path="/edit/:id" element={<PrivateRouter />}>
            <Route index element={<EditRecipe />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
