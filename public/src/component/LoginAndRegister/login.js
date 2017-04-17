import React, {Component} from "react";
import {render} from "react-dom";
import style from "../../../assest/css/login.css"

class Login extends Component {


    render() {
        return <div>
            <form action="">
                用户名：<input id="userName" type="text" placeholder="输入姓名" className={style.title}/>
            </form>
        </div>
    }
}
export default Login;