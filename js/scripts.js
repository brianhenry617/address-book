var name;
var address;
var phoneNumber;
var email;
var idNumber=0;
var addressBook=[];

$(document).ready(function() {
  getValues=function(){
    name=$("input#value1").val();
    address=$("input#value2").val();
    phoneNumber=$("input#value3").val();
    email=$("input#value4").val();

  }

  $("button#addToContact").click(function(){
    getValues();
    addressBook.push(name);
  //$(".contactDisplay").append(addressBook[idNumber]);

    $(".contactDisplay").append("<li"+ " id=listItem"+idNumber+">"+addressBook[idNumber]+"</li>");
    idNumber++;
  });











});
