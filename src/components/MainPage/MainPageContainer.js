import React from 'react';
//import { connect } from 'react-redux';
//import { compose } from 'redux';
import { getTop } from '../../API/API';
import MainPage from './MainPage';
import style from "./MainPage.module.css";
import {setIdActionCreator} from "../../Redux/FilmCardReducer";
import {connect} from "react-redux";

class MainPageContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            filmsList: []
        }
    }

    componentDidMount(){
        getTop().then(data => {
            if (data.length > 0){
                this.setState({ 
                    filmsList: data
                 });
            }
        }).catch(error => {
            console.log(error, "error");
        });    
    }
        
    render() {
        return <div className={style.mainPage}>
            <MainPage films={this.state.filmsList}
                      setId={this.props.setId}  
            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        status: "i work"
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setId: (id) => {
            dispatch(setIdActionCreator(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
