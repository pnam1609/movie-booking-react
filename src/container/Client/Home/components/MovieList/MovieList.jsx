import React from 'react';
import MovieItem from './components/MovieItem/MovieItem';
import styles from './MovieList.module.css';

function MovieList(props) {
  const { movieList } = props;
  const renderMovieList = movieList?.map((movie) => {
    return (
      <MovieItem
        key={movie.maPhim}
        movieName={movie.tenPhim}
        trailer={movie.trailer}
        movieImg={movie.hinhAnh}
        movieRate={movie.danhGia}
        secretMovieName={movie.biDanh}
      />
    );
  })

  return (
    <div className={`${styles.Container_Lg} ${styles.P_Lg_0}`}>
      <div className={styles.Content}>
        <div className={styles.Filter}>
          <div className={styles.SortBy}>
            <span className={styles.Type}>
              Sort By: &nbsp;
            </span>
            <select name="sortBy" className='Option'>
              <option value="1">All</option>
              <option value="2">Now showing</option>
              <option value="3">Coming</option>
            </select>
          </div>
        </div>
        <div className={styles.MovieList}>
          <div className={styles.Row}>
            {renderMovieList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieList
