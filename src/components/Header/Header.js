import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import MenuContainer from "./MenuContainer";
import style from "./Header.module.css";
import SearchBox from './SearchBox';


function Header() {
    return (     
            <AppBar style={{position: "relative"}}>
                <div className={style.header_container}>
                <div className={style.logo}>
                    <h1>Movies</h1>
                </div>
                <div>
                    <SearchBox/>
                </div>
                <div>
                    <MenuContainer/>
                </div>
                </div>
            </AppBar>
    )
}

export default Header;
