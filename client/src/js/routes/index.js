/**
 * Created by hshen on 9/24/16.
 */

import React from 'react'
import ChatContainer from 'js/containers/ChatContainer';
import SignInContainer from 'js/containers/SignInContainer';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={SignInContainer} />/*进入登陆页面，没有默认加载的部分*/
        <Route path="/chat" component={ChatContainer}></Route>/*进入具体的聊天室*/
    </Router>
);

export default Routes;
