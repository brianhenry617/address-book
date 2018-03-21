var value1;
var value2;

$(document).ready(function() {
  getValues = function() {
    value1 = parseInt($("input#value1").val());
    value2 = parseInt($("input#value2").val());
  }
  $("button").click(function() {
    getValues();
  })

  $("button#add").click(function(){
    alert(value1+value2);
  });
  $("button#subtract").click(function(){
    alert(value1-value2);
  });
  $("button#multiply").click(function(){
    alert(value1*value2);
  });
  $("button#divide").click(function(){
    alert(value1/value2);
  });
});
