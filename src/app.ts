import greeter from './greeter';

(function(){
  var myGreeter = new greeter();
  document.body.innerHTML= '<h1>' + myGreeter.greet('world') + '</h1>';
})();
