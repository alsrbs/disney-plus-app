import React, {useState, useEffect} from 'react'
import "./Banner.css";
import axios from '../api/axios';
import requests from '../api/requests';
import styled from 'styled-components';

function Banner() {

  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // 영화 id를 random으로 선택
    const movies = request.data.results;
    const movieId = movies[
      Math.floor(Math.random() * movies.length)
    ].id;

    // 해당 id로 영화 상세정보를 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: 'videos'},
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  if (isClicked) {
    return (
      <>
        <Conraniner>
          <button onClick={() => setIsClicked(false)}>X</button>
          <Homecontainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}
              ?controls=0&autoplay=1&mute=1&loop=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </Homecontainer>
        </Conraniner>
      </>
    )
  } else {
    return (
      <header
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover'
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
  
          <div className="banner__butttons">
            {movie?.videos?.results[0]?.key && 
            <button 
              className='banner__button play'
              onClick={() => setIsClicked(true)}
            >
              play
            </button>
            }
          </div>
  
          <p className="banner__description">
            {truncate(movie.overview, 100)}
          </p>
        </div>
  
        <div className="banner--fadeBottom" />
      </header>
    )
  }
}

export default Banner

const Conraniner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
`;

const Homecontainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;