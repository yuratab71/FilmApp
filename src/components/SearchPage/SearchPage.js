import React from 'react';
import style from "./SearchPage.module.css";
import {Link} from "react-router-dom";
import Preloader from "../common/Preloader";
 
function SearchPage(props) {  
    return (
        <div>
            {props.list.length === 0 ? <Preloader/>
            : props.list.map(el => {
                return <div key={el.id} className={style.searchCard}>
                    <div>
                        
                        <img alt="film-poster" className={style.search_image} src={el.image} />
                    </div>
                    <div>
                        <h2>{el.title}</h2>
                        Search type: {el.resultType}
                        <h3>{el.description}</h3>
                        <Link id={el.id} to={`film/${el.id}`}>Show More</Link>
                    </div>
                    
                </div>})}
            
            
        </div>
    )
}

/*const list = [
    {
        id: "tt0110413", 
        resultType: "Title", 
        image: "https://imdb-api.com/images/original/MV5BODllNWE0M…yXkFqcGdeQXVyNTc1NTQxODI@._V1_Ratio0.7273_AL_.jpg",
         title: "Léon: The Professional", 
         description: "(1994) aka 'Leon - Der Profi'"
        },
        {
            id: "tt0100029",
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BMTU1NDEyM…yXkFqcGdeQXVyNDc2NjEyMw@@._V1_Ratio0.7273_AL_.jpg", 
            title: "Lionheart", 
            description: "(1990) aka 'Leon'"
        },
        {
            id: "tt0104710", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BNDE2ODMxY…yXkFqcGdeQXVyMDY4MzkyNw@@._V1_Ratio0.7273_AL_.jpg", 
            title: "Leon the Pig Farmer", 
            description: "(1992)"
        },
        {
            id: "tt7950706", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BMGVjZDlhM…yXkFqcGdeQXVyMTA4NTIwNDQw._V1_Ratio0.7273_AL_.jpg", 
            title: "Leonardo", 
            description: "(2021) (TV Series)"
        },
        {
            id: "tt0327137", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BMDExNDM3O…yXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7273_AL_.jpg", 
            title: "Secondhand Lions", 
            description: "(2003) aka 'Leones de segunda mano'"
        },
        {
            id: "tt0891527", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BMTcyMzc0M…BanBnXkFtZTcwMTM2NDk0NA@@._V1_Ratio0.7273_AL_.jpg", 
            title: "Lions for Lambs", 
            description: "(2007) aka 'Leones por Corderos'"
        },
        {
            id: "tt0220880", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BMTU4MGEyN…yXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg", 
            title: "Courage the Cowardly Dog", 
            description: "(1999) (TV Series) aka 'Leone il cane fifone'"
        },
        {
            id: "tt2185037", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BYTU3YjU3N…yXkFqcGdeQXVyOTU0MjgwMzU@._V1_Ratio0.7273_AL_.jpg", 
            title: "Running Man", 
            description: "(2010) (TV Series) aka 'Leonning Maen'"
        },
        {
            id: "tt13879466", 
            resultType: "Title", 
            image: "https://imdb-api.com/images/original/MV5BNTUzZjc0Y…yXkFqcGdeQXVyNjEwNTM2Mzc@._V1_Ratio0.7273_AL_.jpg", 
            title: "The One", 
            description: "(2021) (TV Series)"},
        {
            id: "tt0374900", resultType: "Title", image: "https://imdb-api.com/images/original/MV5BNjYwNTA3M…BMl5BanBnXkFtZTYwMjIxNjA3._V1_Ratio0.7273_AL_.jpg", 
            title: "Napoleon Dynamite", 
            description: "(2004)"
        }
    ]*/

export default SearchPage;
