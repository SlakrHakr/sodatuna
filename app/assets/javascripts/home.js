function doStuff() {
  $("#before").effect("shake", {times: 10}, 1000, function() {
    var prob = 0.3; // prob = percent probability / 100; e.g. 30% -> 0.3
    if(Math.random() < prob) {
      $('#after').removeClass('hidden');
      $('#before').addClass('hidden');
      $('body').addClass('fail');
    }
  });
}

function resetStuff() {
  $('body').removeClass('fail');
  $('#before').removeClass('hidden');
  $('#after').addClass('hidden');
}
