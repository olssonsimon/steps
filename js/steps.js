$(function() {

  // Do calcs in cm so we must convert and then reconvert

  $('#result').css('display', 'none');

  $('#calculate').click(function() {
    height   = parseInt($('#height').val());
    distance = parseInt($('#distance').val());

    stride = height * 0.4 / 100;
    steps  = Math.round(distance / stride);

    $('#result_text').text(steps);
    $('#result').css('display', 'block');
  });

});