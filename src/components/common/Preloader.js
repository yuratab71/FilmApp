import React from 'react';
import style from "./Preloader.module.css";
import CircularProgress from '@material-ui/core/CircularProgress';

function Preloader() {
    return (
        <div className={style.preloader}>
            <div>
                <p className={style.word}>Wait...</p>
                <CircularProgress/>
            </div>
        </div>
    )
}

export default Preloader
