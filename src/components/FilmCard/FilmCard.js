import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import style from "./FilmCard.module.css";
import ReactPlayer from "react-player";

function FilmCard(props) {
    
    const history = useHistory();

    function GoBack(){
        history.goBack();
    }

    console.log(props.filmData.awards);

    return (
        <div className={style.film_card}>
            <Link onClick={GoBack}>Go Back</Link>
            <h2>{props.filmData.title}</h2>
            <div className={style.film_container}>
                <div>
                    <img className={style.film_image} src={props.filmData.image} />
                </div>
                <div>
                    <div className={style.film_text}>{props.filmData.fullTitle}</div>
                    <div className={style.film_text}>{props.filmData.awards ? props.filmData.awards.split('|')[0] : ""}</div>
                    <div className={style.film_text}>{props.filmData.awards ? props.filmData.awards.split('|')[1] : ""}</div>
                </div>
            </div>
            <div>
                <ReactPlayer url={props.videoData.videoUrl}/>
            </div>

        </div>
    )
}

export default FilmCard;
