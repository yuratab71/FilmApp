import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import style from "./FilmCard.module.css";
import ReactPlayer from "react-player";

function FilmCard(props) {
    
    const history = useHistory();

    function GoBack(){
        history.goBack();
    }

    return (
        <div>
            <Link onClick={GoBack}>Go Back</Link>
            <h2>{props.filmData.title}</h2>
            <div className={style.film_container}>
                <div>
                    <img className={style.film_image} src={props.filmData.image} />
                </div>
                <div>
                    <p>{props.filmData.fullTitle}</p>
                    <p>{props.filmData.awards}</p>
                </div>
            </div>
            <div>
                <ReactPlayer url={props.videoData.videoUrl}/>
            </div>

        </div>
    )
}

export default FilmCard;
