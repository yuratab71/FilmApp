import React from 'react';
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
        switch(this.props.categories){
            case "Movies":
                getTop().then(data => this.setState({filmsList: data}));
                break;
            case "TVSeries":
                getSeries().then(data => this.setState({filmsList: data}));
                break;    
                default:
                    break;
        }
    }
    componentDidUpdate(prevProps){
       //console.log(prevProps.categories, this.props.categories);         
    if (prevProps.categories !== this.props.categories){
        switch(this.props.categories){
            case "Movies":
                getTop().then(data => this.setState({filmsList: data}));
                break;
            case "TVSeries":
                getSeries().then(data => this.setState({filmsList: data}));
                break;    
                default:
                    break;
        }
    }}
    
    render() {
        return <div className={style.mainPage}>
            <MainPage films={this.state.filmsList}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.filmList.categorie,
    }
} 



export default connect(mapStateToProps)(MainPageContainer);
