import React, {useEffect, useState} from 'react';
import style from "./MainPage.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {  Link } from 'react-router-dom';
import Preloader from "../common/Preloader";

function MainPage(props) {    
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentList, setCurrentList] = useState([]);
    //pagination
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
    const classes = useStyles();
    //

    

    useEffect(() => {
        setFilms(props.films);
        setCurrentList(props.films.slice(currentPage, currentPage + 5));
    }, [props.films]);
    useEffect(() => {
        if (films){
            setCurrentList(films.slice(currentPage , currentPage + 5));
        }    
    }, [currentPage]);
    const onPageChange = (event, value) => {
        setCurrentPage((value)*5 - 5);
    }

    const saveToLocalStorage = (e) => {
        console.log("save work");
        localStorage.setItem(e.target.id, e.target.title);
    }

    const deleteFromLocalStorage = (e) => {
        localStorage.removeItem(e.target.id);
    }

    return (<>
        {films.length === 0 ? <Preloader/>
         : <div className={style.filmList}>  
                {currentList.map(el => {
                    return <div className={style.filmCard} key={el.id}>
                        <h2>{el.title}</h2>
                        <div className={style.filmSidebar}>
                            <img src={el.image} className={style.filmPoster}/>
                            <div className={style.filmInfo}>
                                <Link id={el.id} to={`film/${el.id}`}>{el.fullTitle}</Link>
                                <p>rank: {el.rank}</p>
                                <p>actors: {el.crew}</p>
                                <p>IMDb raiting: {el.imDbRating}</p>
                                {
                                    localStorage.hasOwnProperty(el.id)
                                        ? <button id={el.id} onClick={deleteFromLocalStorage}>delete</button>
                                       : <button id={el.id} title={el.fullTitle} onClick={saveToLocalStorage}>save</button>
                }
                            </div>
                        </div>
                    </div>
                })}
                <div>
                    <div className={classes.root}>
                        <Pagination onChange={onPageChange} count={25} color="primary" />
                    </div>
                </div>
        </div>}
        
        
        </>
    )
}

export default MainPage;
