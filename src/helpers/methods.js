import axios from "./axios";

const postRequest = async (url, data) => {
  const options = {
    url: url,
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json;charset=UTF-8",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${
        localStorage.getItem("authToken")
          ? localStorage.getItem("authToken")
          : ""
      }`,
    },
    data: data,
  };
  return await axios(options);
};

const postRequestWithOutToken = async (url, data) => {
  const options = {
    url: url,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };
  return await axios(options);
};

const getRequest = async (url) => {
  const options = {
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${
        localStorage.getItem("authToken")
          ? localStorage.getItem("authToken")
          : ""
      }`,
    },
  };
  return await axios(options);
};

const getRequestWithOutToken = async (url) => {
  const options = {
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  return await axios(options);
};
const deleteRequest = async (url) => {
  const options = {
    url: url,
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${
        localStorage.getItem("authToken")
          ? localStorage.getItem("authToken")
          : ""
      }`,
    },
  };
  return await axios(options);
};

const putRequest = async (url, data) => {
  const options = {
    url: url,
    method: "PUT",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json;charset=UTF-8",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${
        localStorage.getItem("authToken")
          ? localStorage.getItem("authToken")
          : ""
      }`,
    },
    data: data,
  };
  return await axios(options);
};

const putRequestWithOutToken = async (url, data) => {
  const options = {
    url: url,
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };
  return await axios(options);
};
export {
  getRequest,
  getRequestWithOutToken,
  postRequest,
  postRequestWithOutToken,
  deleteRequest,
  putRequest,
  putRequestWithOutToken,
};
