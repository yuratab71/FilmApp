import React from 'react';
import style from "./LocalStorage.module.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function LocalStorage(props) { 
    return (
        <div className={style.localContainer}>
           <h3>Local Storage</h3>
           {    props.films.length === 0 
           ? <p>add something</p>
            : props.films.map(item => {
                   return <div className={style.localCard}>
                       <Link id={item.id} to={`film/${item.id}`}>{item.title}</Link>
                   </div>
               })
           }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        films: state.locals.locals
    }
}


export default connect(mapStateToProps)(LocalStorage);
