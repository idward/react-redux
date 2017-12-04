import React, {Component} from 'react';
import {connect} from 'react-redux';

import Main from './components/main';
import User from './components/user';

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: 'Max'
        };

        this.changeUsername = this.changeUsername.bind(this);
    }

    changeUsername(newName) {
       this.props.setName(newName);
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: 'SET_NAME',
                payload: name
            });
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
