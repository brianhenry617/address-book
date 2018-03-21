var idNumber=0;
var nameBook=[];
var addressBook=[];
var phoneBook=[];
var emailBook=[];
function thisResultNameClassWasClicked(){
  $(".resultNameClass").click(function() {
    var myCurrentName = $(this).text();
    getOtherBooks(findNameInArray(myCurrentName));
  });
}
function findNameInArray(inputName){
  for(var i = 0; i < nameBook.length; i ++){
    if(nameBook[i] == inputName){
      return i;
    }
  }
  return -1;
}
function getOtherBooks(idNumber){
  var addressBookValue = addressBook[idNumber];
  var phoneBookValue = phoneBook[idNumber];
  var emailBookValue = emailBook[idNumber];
  $(".contactDisplay").text("");
  $(".contactDisplay").append("<h4>AddressBook:" + addressBookValue + "</h4><h4>phoneBookValue: " + phoneBookValue + "</h4><h4> emailBookValue" + emailBookValue + "</h4>");
}
function pushToArrays(name, address, phoneNumber,email){
  nameBook.push(name);
  addressBook.push(address);
  phoneBook.push(phoneNumber);
  emailBook.push(email);
}
$(document).ready(function() {
    $("#input-form").submit(function(event){
    event.preventDefault();
    console.log("Current Index: " + idNumber + ", Current Length Of Name: " + nameBook.length);
    var name=$("input#value1").val();
    var address=$("input#value2").val();
    var phoneNumber=$("input#value3").val();
    var email=$("input#value4").val();
    pushToArrays(name,address,phoneNumber,email);

    $("#nameList").append("<li class='resultNameClass'>"+nameBook[idNumber]+"</li>");

    idNumber ++;
    thisResultNameClassWasClicked();
  });

});












// getValues=function(){
//   name=$("input#value1").val();
//   address=$("input#value2").val();
//   phoneNumber=$("input#value3").val();
//   email=$("input#value4").val();
// }

// $("button#addToContact").click(function(){
//   getValues();
//   nameBook.push(name);
//   addressBook.push(address);
//   phoneBook.push(phoneNumber);
//   emailBook.push(email);
// //$(".contactDisplay").append(addressBook[idNumber]);
//
//   $("#nameList").append("<li id='listItem1'><a href='somePath'>"+nameBook[idNumber]+"</a>ß</li>");
//   idNumber++;
// });

// $("#listItem1").click(function(){
//     $(".contactDisplay").append(addressBook[0]);
// });
