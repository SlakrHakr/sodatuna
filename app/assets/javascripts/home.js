function doStuff() {
  var prob = 0.2; // prob = percent probability / 100; e.g. 30% -> 0.3
  if(Math.random() < prob) {
    $('#after').removeClass('hidden');
    $('#before').addClass('hidden');
    $('body').addClass('fail');
  } else {
    $('#before').animate({
      left: '150%'
    }, 500, function() {
        $('#before').css('left', '-50%');
        $('#before').animate({
          left: '50%'
        }, 500, function() {});
    });

    $('#before').next().animate({
        left: '50%'
    }, 500);
  }
}

function resetStuff() {
  $('body').removeClass('fail');
  $('#before').removeClass('hidden');
  $('#after').addClass('hidden');
}
