// @param: array of numbers
function highest(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    max = numbers[i] ? numbers[i] > max : max;
  }
  return max;
}

$(document).on('ready', function() {

  $('.container').on('click', function() {
    var card = $(this).find('.card');
    if (card.css('transform') === 'matrix3d(-1, 0, -1.22465e-16, 0, 0, 1, 0, 0, 1.22465e-16, 0, -1, 0, 0, 0, 0, 1)') {
      card.css('transform', 'rotateY(0deg)');
    } else {
      card.css('transform', 'rotateY(180deg)');
    }
  });
});
