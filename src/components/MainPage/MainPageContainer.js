import React from 'react';
//import { connect } from 'react-redux';
//import { compose } from 'redux';
import { getTop, getSeries } from '../../API/API';
import MainPage from './MainPage';
import style from "./MainPage.module.css";
import {connect} from "react-redux";

class MainPageContainer extends React.Component {
    constructor(props){
        super();
        this.state = {
            filmsList: []
        }
    }

    componentDidMount(){
        getTop().then(data => this.setState({filmsList: data}));
    }
    componentDidUpdate(prevProps){
                
    /*switch(this.props.categories){
                    case "Movies":
                        console.log("switch to MOVIES");
                        getTop().then(data => this.setState({filmsList: data}));
                        break;
                    case "TVSeries":
                        console.log("switch to SERIES");
                        getSeries().then(data => this.setState({filmsList: data}));
                        break;    
                } */
        }
    

    render() {
        return <div className={style.mainPage}>
            <MainPage films={this.state.filmsList}
                       
            />
            {this.props.categories}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.filmList.categorie
    }
} 

export default connect(mapStateToProps)(MainPageContainer);
