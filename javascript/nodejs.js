
module.exports = {
    connect: {
        websocket: require('./connect/websocket'),
        ws: require('./connect/ws'),
        socketio: require('./connect/socketio'),
        sockjs: require('./connect/sockjs')
    },
    listen: {
        ws: require('./listen/ws'),
        uws: require('./listen/uws'),
        socketio: require('./listen/socketio'),
        sockjs: require('./listen/sockjs')
    }
};