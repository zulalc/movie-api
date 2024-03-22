import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface Movies {
  id: number;
  title: string,
  poster_path: string,
  release_date: string
}

function App() {

  const [movies, setMovies] = useState<Movies[]>([]);

  const apiKey = "";
  const popular = "https://api.themoviedb.org/3/movie/top_rated"; 

  //title: string poster_path: string id: number 

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get(`${popular}?api_key=${apiKey}`).then((response) => {
      const result = response.data.results;
      setMovies(result);
    })
  }

  return (
    <div className="App">
      <h1>MOVIES</h1>
      {movies.map((items) => (
        <div className="movieContainer" key={items.id}>
          <h2>{items.title}</h2>
          {items.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`} />
          )}
          <h4>{items.release_date}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
