import React, {Component} from 'react';
import FilmCard from './FilmCard';
import {getTitle} from "../../API/API";


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
        />
    }
}

export default FilmCardContainer;
