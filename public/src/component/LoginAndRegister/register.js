import React, {Component} from "react";
import {render} from "react-dom";
import style from '../../../assest/css/resigner.css';

class Resigner extends Component {


    render() {
        return <div id="form">
            <div>
                <input id="userName" type="text" placeholder="输入姓名" className={style.title}/>
            </div>
            <input type="submit" value='注册'/>
        </div>
    }
}
export default Resigner;