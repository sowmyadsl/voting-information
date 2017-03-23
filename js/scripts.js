var oldEnough = function(age) {
  return age > 18;
};

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var age = parseInt($('form input').val());
    if (oldEnough(age)) {
      $('#notyet').hide();
      $('#oldenough').show();
    } else {
      $('#oldenough').hide();
      $('#notyet').show();
    }
  });
  $('.panel').hide();
});
