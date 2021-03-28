import React, {useState, useEffect} from 'react';
import style from "./LocalStorage.module.css";

const array = [
    {
        title: "Shawshank",
        id: "12345678"
    },
    {
        title: "Lord of the Rings",
        id: "12323456"
    },
    {
        title: "leon",
        id: "87654321"
    }
]

function LocalStorage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        let arr = [];

        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
              continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
            }
            arr.push({
                id: key,
                title: localStorage.getItem(key)
            })
          }
        setFilms(arr);
    }, [])

    useEffect(() => {
        let arr = [];

        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
              continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
            }
            arr.push({
                id: key,
                title: localStorage.getItem(key)
            })
          }
        setFilms(arr);
    }, [localStorage])

    return (
        <div className={style.localContainer}>
           {films.length === 0 ? <p>add something</p> : films.map(el => {
               return <div>
                   <h3>{el.title}</h3>
                   <p>{el.id}</p>
               </div>
           })}
        </div>
    )
}

export default LocalStorage;
