import React from 'react';
import style from "./LittleFilmCard.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {localStorageAC, localDeleteAC} from "../../Redux/LocalStorageReducer";

function LittleFilmCard(props) {
    const saveFilm = (e) => {
        props.save({
            id: e.target.id,
            title: e.target.title
        })
    }

    const deleteFilm = (e) => {
        props.delete(e.target.id);
    }
    
    return (
        <div className={style.filmCard} key={props.id}>
                        <h2>{props.title}</h2>
                        <div className={style.filmSidebar}>
                            <img src={props.image} alt="film poster" className={style.filmPoster}/>
                            <div className={style.filmInfo}>
                                <Link id={props.id} to={`film/${props.id}`}>{props.fullTitle}</Link>
                                <p>rank: {props.rank}</p>
                                <p>actors: {props.crew}</p>
                                {
                                    props.ids.includes(props.id) 
                                    ? <button id={props.id} onClick={deleteFilm}>Delete</button>
                                    : <button id={props.id} title={props.fullTitle} onClick={saveFilm}>save</button>
                                }
                             
               
                            </div>
                        </div>
                    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ids: state.locals.ids
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (filmData) => {
            dispatch(localStorageAC(filmData));
        },
        delete: (id) => {
            dispatch(localDeleteAC(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LittleFilmCard);
