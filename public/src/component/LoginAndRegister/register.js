import React, {Component} from "react";
import {render} from "react-dom";
import style from '../../../assest/css/resigner.css';

class Login extends Component {


    render() {
        return <div id="form">
            <div>
                <input id="userName" type="text" placeholder="输入姓名" className={style.title}/>
            </div>
            <div>
                <input id="passWord" type="text" placeholder="输入密码"/>
            </div>
            <div>
                <input id="repassWord" type="text" placeholder="再次输入密码"/>
            </div>
            <div>
                <input type="text" id="telephone" placeholder="输入电话号码"/>
            </div>
            <div>
                性别：男<input type="radio" id="sex" name="sex"/>
                女<input type="radio" name="sex"/>
            </div>
            <div>
                <input type="submit" value='注册'/>
            </div>
        </div>
    }
}
export default Login;