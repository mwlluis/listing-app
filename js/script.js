$(document).ready(function() {
  $("#addon-button").click(function() {
    $("#timelog").append("<li>" + $("#day").val() + "; " + $("#activity").val() + "; " + $("#duration").val() + "</li>");
    $("input").each(function() {
      $("input").val("");
    });
  });
});