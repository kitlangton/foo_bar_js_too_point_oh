// ----------------------------------------
// App
// ----------------------------------------

var JC = JC || {};

JC.init = (function(controller) {
  return function() {
    controller.init();
  }
})(JC.controller);

$(document).ready(function() {
  JC.init();
});


