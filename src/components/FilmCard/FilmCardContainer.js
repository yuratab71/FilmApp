import React, {Component} from 'react';
import FilmCard from './FilmCard';
import {getTitle} from "../../API/API";
import {connect} from "react-redux";
import {localStorageAC} from "../../Redux/LocalStorageReducer";

class FilmCardContainer extends Component {
    constructor() {
        super();
        this.state = {
            filmData: {}
        }
    }
    
    componentDidMount() {
        getTitle(this.props.location.pathname.split("/")[2]).then(
            data => {
                this.setState({
                    filmData: data.data 
                })
            }
        ).catch(error => {
            console.log(error, "error");
        });   
    }
    
    render() {
        return <FilmCard id={this.props.id}
                         filmData={this.state.filmData}
                         save={this.props.addToLocal}
        />
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        addToLocal: (e) => dispatch(localStorageAC(e))
    }
}

export default FilmCardContainer;
