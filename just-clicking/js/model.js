// ----------------------------------------
// Model
// ----------------------------------------

var JC = JC || {};

JC.model = (function(){

  var _scale = 1;
  var _score = 0;
  var _scaleCount = 100;
  var _squares = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]

  var getScore = function () {
    return _score;
  };

  var getSquares = function () {
    return _squares;
  };

  var getScale = function() {
    return _scale;
  };

  var activateRandomSquare = function () {
    var indices = _squares.map(function(_, index) { return index});
    indices = _.shuffle(indices);
    indices.find(function(index) {
      square = _squares[index]
      if (square == 0) {
        _squares[index] = 1;
        return true;
      }
    })
  };

  var processSquareClick = function (index) {
    if (_squares[index] == 1) {
      _score += 10;
      _squares[index] = 0;
      if (_score >= _scaleCount) {
        _scaleCount += 100;
        _scale += 0.3
      }
    }
  };


  return {
    getScore: getScore,
    getScale: getScale,
    getSquares: getSquares,
    activateRandomSquare: activateRandomSquare,
    processSquareClick: processSquareClick
  }
})();
