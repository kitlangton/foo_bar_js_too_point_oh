// ----------------------------------------
// Controller
// ----------------------------------------

var JC = JC || {};

JC.controller = (function(model, view) {

  var _processSquareClick = function(index) {
    model.processSquareClick(index);
    var score = model.getScore();
    var squares = model.getSquares();
    var scale = model.getScale();
    view.setBoardSize(scale);
    view.updateScore(score);
    view.updateSquares(squares);
  }

  var _loop = function() {
    setInterval(function() {
      model.activateRandomSquare();
      squares = model.getSquares();
      view.updateSquares(squares);
    }, 1000)
  }

  var init = function() {
    view.init(_processSquareClick);
    _loop();
  }

  return {
    init: init
  }
})(JC.model, JC.view);


