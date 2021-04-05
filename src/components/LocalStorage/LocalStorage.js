import React, {useEffect} from 'react';
import style from "./LocalStorage.module.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {setDefaltAC} from "../../Redux/LocalStorageReducer";

function LocalStorage(props) { 
    useEffect(() => {
        let array = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            console.log(key, value, ">>>> LocalStorage", i+1);
            props.setDefault({
                id: key,
                title: value
            })
        }
    }, []);
    
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

const mapDispatchToProps = (dispatch) => {
    return {
        setDefault: (e) => dispatch(setDefaltAC(e))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LocalStorage);
