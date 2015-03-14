angular.module('cf-socket-io', ['cf-socket-io.utils'])
.factory('Socket', function(SocketIO, SocketIOUtils, $timeout, $rootScope){
  return function Socket(path){
    var socket = SocketIO.connect(path)
    SocketIOUtils.decorate(socket)
    return socket
  }
})
.service('SocketIO', function(){
  return window.io || {connect:angular.noop}
})
