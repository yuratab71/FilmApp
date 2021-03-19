import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import style from "./FilmCard.module.css";

function FilmCard(props) {
    useEffect(() => {
    }, [props])
    
    return (
        <div>
            <Link to="/">Go Back</Link>
            <h2>{props.filmData.title}</h2>
            <div className={style.film_container}>
                <div>
                    <img className={style.film_image} src={props.filmData.image} />
                </div>
                <div>
                    <p>{props.filmData.fullTitle}</p>
                    <p>{props.filmData.awards}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default FilmCard;