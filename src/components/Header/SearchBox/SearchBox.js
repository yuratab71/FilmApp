import React from 'react'
import Button from "@material-ui/core/Button";
import style from "./SearchBox.module.css";
import {connect} from "react-redux";
import {SearchAC} from "../../../Redux/SearchReducer";
import {Link} from "react-router-dom";

function SearchBox(props) {
    function onSearchChange(e){
        props.search(e.target.value.trim());
    }
    
    return (<>
        <div className={styleMedia.search_box}>
            <span>Search</span>
            <input onChange={onSearchChange} type="text" className={style.header_input} autoFocus={true}/>
        </div>
        <Link to="/search"><Button className={style.searchField_button} variant="contained">Find</Button></Link>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (e) => dispatch(SearchAC(e))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
