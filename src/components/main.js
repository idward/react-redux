import React, {Component} from 'react';

class Main extends Component {

    changeName(){
        this.props.changeUsername('Anna');
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary" onClick={this.changeName.bind(this)}>Change the username</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;