// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        var iceServers = [{
            'urls': [
                'turn:https://github.com/coturn/coturn',
            ]
        }];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();