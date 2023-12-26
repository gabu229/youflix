import axios from "axios";

async function fetchData(id) {
  const apiKey = process.env.OMDB_API_KEY;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movie data");
  }
}

export default async function getMovieData(req, res) {
  try {
    const movieId = req.query.id;
    const data = await fetchData(movieId);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
