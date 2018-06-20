import * as types from 'js/constants/ActionTypes';/*通配符表示返回全部*/

/*
 * action creator
 */
/*发送了消息*/
export function sendMessage(message) {
    return {
        type: types.SEND_MESSAGE,
        message
    }
}
/*收到消息*/
export function receiveMessage(message) {
    return {
        type: types.RECEIVE_MESSAGE,
        message
    }
}
/*用户登入*/
export function userJoined(data) {
    return {
        type: types.USER_JOINED,
        data
    }
}
/*用户登出*/
export function userLeft(data) {
    return {
        type: types.USER_LEFT,
        data
    }
}