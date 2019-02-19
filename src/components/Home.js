import React, { Component } from 'react';
import { addNewString } from '../action/index';

import { connect } from 'react-redux';

class Home extends Component {


    getData = (e) => {
        this.props.update(e.target.value, this.props.posts);
    }
    render() {
        return (
            <div>
                <h1>welcome user</h1>
                <button onClick={this.getData} value='Got Data On Home'>Got Data On Home</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (someData) => {
            dispatch(addNewString(someData))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);