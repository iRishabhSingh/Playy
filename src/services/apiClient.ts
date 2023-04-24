import axios from "axios";

export default axios.create({
  baseURL: "https://rawg.io/api",
  params: {
    key: "fca804efa2c84dafaf77a5a5d39a799b",
  },
});
