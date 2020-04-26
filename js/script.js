$(document).ready(function() {
  $("#addon-button").click(function() {
    $("#timelog").append("<li>" + $("#activity").val() + "; " + $("#duration").val() + "</li>");
  });
});