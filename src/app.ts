import greeter = require('./greeter');

(function(){
  document.body.innerHTML= '<h1>' + greeter.greet('world') + '</h1>';
})();