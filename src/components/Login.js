import React, { Component } from 'react';
import { connect } from 'react-redux';




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.props.posts);
        if (this.props.posts.signUpData.email === this.state.email && this.props.posts.signUpData.password === this.state.password) {
            this.props.history.push('/home');
        }
        else {
            console.log('not authenticated');
        }
    }

    render() {
        //console.log(this.props.match);
        //console.log(this.props.posts.email === this.state.email);
        return (
            <div>
                <label> Username:</label>
                <input className='textfield' type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                <br />
                <label> Password:</label>
                <input className='textfield' type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                <br />
                <input onClick={this.submitHandle} type="submit" value="Submit" />
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(
    mapStateToProps
)(Login);