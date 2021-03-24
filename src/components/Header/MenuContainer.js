import React from 'react'
import Menu from "./Menu";
import {connect} from "react-redux";
import {FilmListAC} from "../../Redux/FIlmListReducer";
import style from "./Header.module.css"

class MenuContainer extends React.Component{
    render(){
      return <Menu className={style.menu}
                    changeCategorie={this.props.changeCategorie}/>
   }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCategorie: (name) => dispatch(FilmListAC(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
