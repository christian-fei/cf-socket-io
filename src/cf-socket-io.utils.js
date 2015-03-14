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
