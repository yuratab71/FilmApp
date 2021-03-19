import React from 'react'
import style from "./Header.module.css"

function SearchBox() {
    return (
        <div className={styleMedia.search_box}>
            <span></span>
            <input type="text" className={style.header_input} autoFocus={true}/>
        </div>
    )
}

export default SearchBox
