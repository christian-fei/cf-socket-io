angular.module('cf-socket-io', ['cf-socket-io.utils'])
.factory('Socket', function(SocketIO, SocketIOUtils, $timeout, $rootScope){
  return function Socket(path, scope){
    var socket = SocketIO.connect(path)
    SocketIOUtils.decorate(socket)
    if( scope ){
      scope.$on('$destroy', socket.removeListener.bind(socket))
    }
    return socket
  }
})
.service('SocketIO', function(){
  return window.io || {connect:angular.noop}
})
