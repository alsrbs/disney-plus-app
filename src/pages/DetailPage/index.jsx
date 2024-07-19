import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

function DetailPage() {
  let { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchData()
  }, [movieId])

  const fetchData = async () => {
    try {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data:');
      navigate('/main'); // 에러가 발생했을 때 메인 페이지로 이동
    }
  }

  if(!movie) return null;

  return (
    <section>
      {movie && (
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"
      />
      )}
    </section>
  )
}

export default DetailPage
