import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + import.meta.env.VITE_STRIPE_KEY,
  },
};

export const fetchData = async (url) => {
  try {
    const data = await axios.get(import.meta.env.VITE_STRIPE_URL + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const API_URL = import.meta.env.VITE_STRIPE_URL