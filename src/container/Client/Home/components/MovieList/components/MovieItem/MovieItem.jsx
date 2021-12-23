import { LikeFilled, PlayCircleOutlined } from '@ant-design/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MovieItem.module.css';

function MovieItem(props) {
  const { movieName, trailer, movieImg, movieRate, secretMovieName } = props;
  return (
    <div className={`${styles.MovieItem} ${styles.Mt_5} ${styles.Col_Xl_3}`}>
      <Link to={''}>
        <div className={`${styles.CardContent} ${styles.Border_0}`}>
          <div className={styles.ContainImg}>
            <img src={movieImg} alt={secretMovieName} className={`${styles.MovieImg} ${styles.Card_Img_Top}`} />
          </div>
          <div className={`${styles.Card_Body} ${styles.Pb_1}`} title={movieName}>
            <h5 className={`${styles.MovieName} ${styles.Card_Title}`}>{movieName}</h5>
          </div>
          <div className={`${styles.CardFooter} ${styles.Pb_4}`}>
            <div className={styles.Bold_Text}>Đánh giá: <LikeFilled /> {movieRate}</div>
          </div>
        </div>
      </Link>
      <div className={styles.View_Trailer}>
        <PlayCircleOutlined style={{ color: 'white', fontSize: '45px' }} />
      </div>
    </div>
  )
}

export default MovieItem
