import React, { useRef } from 'react'
import './MovieModal.css'
import { AiOutlineClose } from "react-icons/ai";
import useOnClickOutside from '../../hooks/useOnClickOutside';

import '@fortawesome/fontawesome-free/css/all.min.css';

function MovieModal({
    backdrop_path,
    title,
    overview,
    release_date,
    vote_average,
    first_air_date,
    setModalOpen,
    name
  }) {
  
  const ref = useRef();
  const rating = Math.floor(vote_average / 2);

  useOnClickOutside(ref, () => { 
    setModalOpen(false);
  })
  
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? 'fas fa-star star' : 'far fa-star star inactive';
  });

  return (
    <div className='presentation' role='presentation'>
      <div className="wrapper-modal">
        <div className='modal' ref={ref}>
          <span
            className="modal-close"
            onClick={() => setModalOpen(false)}
          >
            <AiOutlineClose />
          </span>

          <img 
            className='modal__poster-img'
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} 
            alt="modal-img" 
          />

          <div className="modal__content">
            <h2 className='modal__title'>{title ? title : name}</h2>

            <div style={{display:'flex', margin:'30px 0px 10px 2px'}}>
              <p className='modal__detail'>
                <span className='modal__user_perc'></span>{" "}
                {release_date ? release_date : first_air_date}
              </p>

              {/* <p className='modal__overview-vote_average'>평점: {vote_average}</p> */}
              <div className="rating">
                {stars.map((starClass, index) => (
                  <i key={index} className={starClass}></i>
                ))}
              </div>

            </div>
            <p className='modal__overview'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
