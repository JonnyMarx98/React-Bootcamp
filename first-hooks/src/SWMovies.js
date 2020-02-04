import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function SWMovies() {
  const [number, setNumber] = useState(7);
  const [movie, setMovie] = useState("")
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data)
      console.log(response);
    }
    getData();
  }, [number])
  return (
    <div>
      <h1>Pick A Movie</h1>
      <h3>Title: {movie.title}</h3>
      <h3>Ep. {movie.episode_id}</h3>
      <h3>Release Date: {movie.release_date}</h3>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  )
}
