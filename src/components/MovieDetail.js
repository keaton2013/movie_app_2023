import React, { useState, useEffect, useCallback } from 'react';
//import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetail() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log('#id:' + id);

    const getMovie = useCallback(async () => {
      const json = await (
        await fetch(`https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`)
      ).json();
      //console.log('#json:' + JSON.stringify(json));

      setMovie(json.data.movie);
      setLoading(false);
    }, [id]);

    // const getMovie = async () => {
    //     const {
    //         data: {
    //             data: { movie }
    //         },
    //     } = await axios.get(`https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`);

    //     setMovie(movie);
    //     setLoading(false);
    // };

    useEffect(() => {
      getMovie();
    }, [getMovie]);

    const navigate = useNavigate();
  
    return (
        <div>
            {loading 
            ? (<h1>Loading...</h1>)
            : (
                <div>
                    <button onClick={() => navigate(-1)}><h4>goto Movie List</h4></button>    
                    <h1>movie detail:{id} {movie.title}</h1>
                    <img src={movie.large_cover_image} alt={movie.title} title={movie.title} />
                </div>
                )
            }
        </div>
    );
}

export default MovieDetail;