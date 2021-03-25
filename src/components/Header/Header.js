import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import MenuContainer from "./MenuContainer";
import style from "./Header.module.css";
import SearchBoxContainer from "./SearchBox/SearchBox";

function Header(props) {
    return (     
            <AppBar style={{position: "relative"}}>
                <div className={style.header_container}>
                <div className={style.logo}>
                    <h1>Movies</h1>
                </div>
                <div className={style.searchField}>
                    
                    <SearchBoxContainer/>
                </div>
                <div>
                    <MenuContainer/>
                </div>
                </div>
            </AppBar>
    )
}



export default Header;
