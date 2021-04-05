import React, {Component} from 'react';
import FilmCard from './FilmCard';
import {getTitle, getTrailer} from "../../API/API";

class FilmCardContainer extends Component {
    constructor() {
        super();
        this.state = {
            filmData: {},
            videoData: {}
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
        getTrailer(this.props.location.pathname.split("/")[2]).then(
            data => {
                this.setState({
                    videoData: {
                        videoId: data.data.videoId,
                        videoUrl: data.data.videoUrl
                    }
                })
            }
        )   
    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname.split("/")[2] !== this.props.location.pathname.split("/")[2]){
            getTitle(this.props.location.pathname.split("/")[2]).then(
                data => {
                    this.setState({
                        filmData: data.data 
                    })
                }
            ).catch(error => {
                console.log(error, "error");
            });
            getTrailer(this.props.location.pathname.split("/")[2]).then(
                data => {
                    this.setState({
                        videoData: {
                            videoId: data.data.videoId,
                            videoUrl: data.data.videoUrl
                        }
                    })
                }
            )   
        }
    }
    
    render() {
        return <FilmCard id={this.props.id}
                         filmData={this.state.filmData}
                         save={this.props.addToLocal}
                         videoData={this.state.videoData}
        />
    }
}

export default FilmCardContainer;
