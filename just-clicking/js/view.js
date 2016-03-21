// ----------------------------------------
// View
// ----------------------------------------

var JC = JC || {};

JC.view = (function() {

  var _onClick, $score, $squares;

  var init = function(onClick) {
    _onClick = onClick;
    $score = $('#score');
    $squares = $('.square');
    $squares.click(function() {
      squareId = $(this).data('square-id');
      _onClick(squareId)
    });
    $squares.each(function(index, square) {
      $(square).attr('data-square-id', index);
    })
  }

  var updateSquares = function(dataSquares) {
    $squares.each(function(index, square) {
      squareId = $(square).data('square-id');
      if (dataSquares[squareId] == 0) {
        $(square).removeClass('active')
      } else {
        $(square).addClass('active')
      }
    })
  }

  var updateScore = function (points) {
    $score.text(points);
  }

  var setBoardSize = function(size) {
    $('#game').css('transform', 'scale(' + size + ')')
  }

  return {
    init: init,
    updateSquares: updateSquares,
    updateScore: updateScore,
    setBoardSize: setBoardSize
  }
})();

