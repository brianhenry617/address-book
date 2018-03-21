var name;
var address;
var phoneNumber;
var email;

$(document).ready(function() {
  $("#input-form").submit(function() {
    name=$("input#value1").val();
    address=$("input#value2").val();
    phoneNumber=$("input#value3").val();
    email=$("input#value4").val();

    $(".contactDisplay").append(name);
    $(".contactDisplay").append(address);
    $(".contactDisplay").append(phoneNumber);
    $(".contactDisplay").append(email);


    event.preventDefault();
  });

});
