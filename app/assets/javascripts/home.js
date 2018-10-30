function doStuff() {
  $('#after').removeClass('hidden');
  $('#before').addClass('hidden');
  $('body').addClass('fail');
}

function resetStuff() {
  $('body').removeClass('fail');
  $('#before').removeClass('hidden');
  $('#after').addClass('hidden');
}
