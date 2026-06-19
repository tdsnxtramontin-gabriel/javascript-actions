import axios from "axios";

const options = {
  method: "GET",
  url: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
};

async function getJoke() {
  const res = await axios(options);
  return res.data.joke;
}

export default getJoke;