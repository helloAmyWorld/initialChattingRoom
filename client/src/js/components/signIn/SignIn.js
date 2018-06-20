/**
 * Created by hshen on 9/27/16.
 */
/**
 * Created by hshen on 9/24/16.
 */
/*开始的登陆页*/
import React, { Component, PropTypes } from 'react';
import {  browserHistory } from 'react-router';
import Singleton from 'js/socket'
/*记住对应的组件引入对应的css,怎么写入的*/
import 'css/signIn.less'

export default class SignIn extends Component {

    constructor(props, context) {
        super(props, context);
        this.socket = Singleton.getInstance();
    }

    handleSignIn(event) {
        if (event.which === 13) {
            event.preventDefault();
            const userName = event.target.value.trim();
            this.socket.emit('signIn', userName);
            browserHistory.push('/chat');/*发送到后端，同时这边就跳转*/
        }
    }
/*还规定字数*/
    render() {
        const { messages} = this.props;
        return (
            <div className="sign-in">
                <div className="form">
                    <h3 className="title">Who are you?</h3>
                    <input className="username-input" type="text"
                           onKeyDown={this.handleSignIn.bind(this)}
                           maxLength={10}
                           autoFocus="true"
                           placeholder="请输入你的名字"
                    />
                </div>
            </div>
        );
    }
}
