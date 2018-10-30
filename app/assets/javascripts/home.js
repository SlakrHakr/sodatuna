function doStuff() {
  $("#before").effect("shake", {times: 10}, 1000, function() {
    var num = Math.floor((Math.random() * 100) + 1)
    if(num < 75 && (num % 2) == 0) {
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
