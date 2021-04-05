import React, {useEffect, useState} from 'react';
import style from "./MainPage.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Preloader from "../common/Preloader";
import LittleFilmCard from "../LittleFilmCard/LittleFilmCard";

function MainPage(props) {    
    const [films, setFilms] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentList, setCurrentList] = useState([]);
    //PAGINATION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
    const classes = useStyles();
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

    return (<>
        {films.length === 0 ? <Preloader/>
         : <div className={style.filmList}>  
                {currentList.map(el => {
                    return <LittleFilmCard 
                    id={el.id} 
                    title={el.title} 
                    image={el.image} 
                    fullTitle={el.fullTitle} 
                    rank={el.rank} 
                    crew={el.crew}
                    save={props.save}/>
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
