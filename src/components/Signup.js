import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpSubmit } from '../action/index';



class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
        console.log('while passing the state', this.state);
        this.props.update(this.state);

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label> Username:</label>
                <input className='textfield' type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                <br />
                <label> Password:</label>
                <input className='textfield' type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                <br />
                <label> Mobile no.:</label>
                <input className='textfield' name='mobno' type="text" onChange={this.handleChange} />
                <br />
                <label> age:</label>
                <input className='textfield' name='age' type="text" onChange={this.handleChange} />
                <br />
                <button type='submit' >Signup</button>
            </form>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (signUpData) => {
            dispatch(signUpSubmit(signUpData))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Signup)