import React, {Component} from 'react';
import {render} from "react-dom";
import Register from "./component/LoginAndRegister/register";
import Login from "./component/LoginAndRegister/login";

class HelloMessage extends React.Component {

    render() {
        return <div>
            <Register />
            <Login/>
        </div>;
    }
}
render(<HelloMessage />, document.getElementById('app'));
