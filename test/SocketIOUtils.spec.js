describe('SocketIOUtils', function () {

  var SocketIOUtils
    , $timeout

  var MyObj = function(){}
  MyObj.prototype.foo = function(){}

  beforeEach(module('cf-socket-io.utils'))

  beforeEach(inject(function(_$timeout_, _SocketIOUtils_){
    SocketIOUtils = _SocketIOUtils_
    $timeout = _$timeout_
  }))

  it('triggers a digest on decorated method of object', function () {
    var myObj = new MyObj
    SocketIOUtils.decorate( myObj )
    myObj.foo()
    $timeout.flush()
  })

})
