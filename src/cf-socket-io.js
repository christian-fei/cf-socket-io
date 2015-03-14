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


angular.module('cf-socket-io.utils',[])
.service('SocketIOUtils', function($timeout){
  return {
    decorate: decorate,
    digestifyFn: digestifyFn
  }
  function decorate(obj){
    console.log( '-- SocketIOUtils:decorate' )
    for(var prop in obj){
      console.log( '-- SocketIOUtils:decorate', prop )
      if( obj[prop] instanceof Function ){
        digestifyFn(obj, prop)
      }
    }
  }

  function digestifyFn(obj, prop){
    var ref = obj[prop]
    obj[prop] = function(){
      var self = this
      var args = Array.prototype.slice.apply(arguments)
      $timeout(function(){
        ref.apply(self, args)
      })
      return self
    }
  }
})
