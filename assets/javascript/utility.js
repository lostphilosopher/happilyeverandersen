/*
 * Utility JS methods (non-prject specific)
 */

// Show / Hide Demo
$( document ).ready(function() {
  var end = new Date('04/30/2016 2:30 PM');
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;
  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = '';
      return;
    }
    var days = Math.floor(distance / _day);
    document.getElementById('countdown').innerHTML = days + ' Days Away';
  }
  timer = setInterval(showRemaining, 1000);
});
