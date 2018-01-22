var myAddresses = [];

//Person constructor
function Person(firstName, lastName, birthday, address, phoneNumber, email){
  this.first=firstName;
  this.last=lastName;
  this.birth=birthday;
  this.address=address;
  this.phone=phoneNumber;
  this.email=email;
}
//Person Setters
Person.prototype.cFirst = function(input){
  this.first = input;
}
Person.prototype.cLast = function(input){
  this.last = input;
}
Person.prototype.cBirth = function(input){
  this.birth = input;
}
Person.prototype.cAddress = function(input){
  this.Person = input;
}
Person.prototype.cPhone = function(input){
  this.phone = input;
}
Person.prototype.cEmail = function(input){
  this.email = input;
}
//Person Cool Functions
Person.prototype.returnAllInformation=function(){
  return "Name: " + this.first + ", " + this.last + "\n" + "Birthday: " + this.birth + "\n" + "Address: " + this.address + "\n" + "Phone: " + this.phone + "\n" + "Email: " + this.email;
}
function returnName(inputName, selector){
  var output = inputName.split(" ")
  if(selector === 0){
    return output[0];
  } else if(selector===1) {
    return output[1];
  }
  return -1;
}
function toggleThePage(){
  $("form#addressForm").toggle();
  $("#results").toggle();
}
function checkFunction(input){
  var arrLength = myAddresses.length;
  for(var i = 0; i < arrLength; i ++){
    var currentValue = myAddresses[i];
    if(currentValue.email == input.email || currentValue.phone == input.phone){
      return -1;
    } else {
    }
  }
    return 1;
}
function displayFunction(){
  var arrLength = myAddresses.length;
  var myCurrentAddress;
  $("#results").text("");
  for(var i = 0; i < arrLength; i ++){
    console.log(arrLength);
    $("#results").prepend("<p>" + myAddresses[i].returnAllInformation() + "</p>");
  }
}

$(document).ready(function(){
  $("#contact").click(function(){
    toggleThePage();
    displayFunction();
  });
  $("form#addressForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var birthday = $("#birthday").val();
    var addressLocal = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var first = returnName(name,0);
    var last = returnName(name,1);
    var callThis = new Person(first,last,birthday,addressLocal,phone,email);

    if(myAddresses[0] == null || checkFunction(callThis) == 1){
      myAddresses.push(callThis);
    } else {
      alert("Sorry Email taken.");
    }

    });
});
