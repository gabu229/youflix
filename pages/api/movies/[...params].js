const axios = require("axios");

async function fetchData(genre, page) {
  var params = (genre !== 'random') ? {genre: capitalizeFirstLetter(genre), page: page} : {};
  
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movie list");
  }
}


export default async function getMovieData(req, res) {
  const genre = req.query.params[0];
  const page = (req.query.params[1]) ? req.query.params[1] : 1 ;
  try {
    console.log(req.query);
    const data = await fetchData(genre, page);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
