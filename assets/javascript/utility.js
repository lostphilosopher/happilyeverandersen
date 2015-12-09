/*
 * Utility JS methods (non-prject specific)
 */

// Show / Hide Demo
$( document ).ready(function() {
  var end = new Date('04/31/2016 12:00 PM');

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  var unit = 'Days';

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = '';
      return;
    }

    var days = Math.floor(distance / _day);

    if (days == 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = '';
      return;
    }

    if (days == 1) {
      unit = 'Day'
    }

    document.getElementById('countdown').innerHTML = days + ' ' + unit + ' Away';
  }
  timer = setInterval(showRemaining, 1000);
});
