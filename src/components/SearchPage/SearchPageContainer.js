import React from 'react'
import SearchPage from "./SearchPage";
import {connect} from "react-redux";
import {getSearch} from "../../API/API";

class SearchPageContainer extends React.Component {

    constructor(props){
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        console.log("Mount", this.props.expression);
        if (this.props.expression){
            getSearch(this.props.expression).then(data => this.setState({list: data}));
        }
        
    }

    componentDidUpdate(prevProps){
        if (prevProps.expression !== this.props.expression){
            if (this.props.expression){
                getSearch(this.props.expression).then(data => this.setState({list: data}));
            }
        }  
    }

    render (){return <SearchPage list={this.state.list} expression={this.props.expression}/>}
}

const mapStateToProps = (state) => {
    return {
        expression: state.search.searchExpression
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageContainer);
