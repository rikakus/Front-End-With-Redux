import axios from "axios";

export const getLatest = () => {
  return {
    type: "GET_LATEST_RECIPE",
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/recipe-news`,
      method: "GET",
    }),
  };
};

export const myRecipe = (users, token) => {
  return {
    type: "GET_USER_RECIPE",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/recipe-user/${users.id}`,
      headers: {
        token: token,
      },
    }),
  };
};

export const searching = (query, token) => {
  return {
    type: "GET_SEARCH_RECIPE",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/recipe/${query}`,
      headers: {
        token: token,
      },
    }),
  };
};

export const deleteRecipe = (id,token) => {
    return new Promise((resolve,reject)=>{
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`,{
            headers: {
              token: token,
            }
        }).then((response)=>{
            resolve(response)
        }).catch((err)=>{
            reject(err)
        })
    })
  };

  export const detailRecipe = (id, token) => {
    return {
      type: "GET_DETAIL_RECIPE",
      payload: axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`,
        headers: {
          token: token,
        },
      }),
    };
  };

  export const addRecipe = (form, token) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, form, {
          headers: { "Content-Type": "multipart/form-data" , token},
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const editRecipe = (id, form, token) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`, form, {
          headers: { "Content-Type": "multipart/form-data" , token},
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
