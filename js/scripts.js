var myAddresses = [];

//Address constructor
function address(firstName, lastName, birthday, address, phoneNumber, email){
  this.first=firstName;
  this.last=lastName;
  this.birth=birthday;
  this.address=address;
  this.phone=phoneNumber;
  this.email=email;
}
//Address Setters
address.prototype.cFirst = function(input){
  this.first = input;
}
address.prototype.cLast = function(input){
  this.last = input;
}
address.prototype.cBirth = function(input){
  this.birth = input;
}
address.prototype.cAddress = function(input){
  this.address = input;
}
address.prototype.cPhone = function(input){
  this.phone = input;
}
address.prototype.cEmail = function(input){
  this.email = input;
}
//Address Cool Functions
address.prototype.returnAllInformation=function(){
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
  $("results").toggle();
}

function checkFunction(input){
  var arrLength = myAddresses.length;
  for(var i = 0; i < arrLength; i ++){
    var currentValue = myAddresses[i];
    if(input.first === this.first &&input.last === this.last &&input.birth === this.birth &&input.address === this.address &&input.phone === this.phone &&input.email === this.email){
      return "Sorry duplicate information.";
    } else if(input.email === this.email){
      return "Sorry this email is taken.";
    } else {
      return -1;
    }
  }
}

function displayFunction(){
  var arrLength = myAddresses.length;
  for(var i = 0; i < arrLength; i ++){
    var myCurrentAddress = myAddresses[i];
    $("results").append("<p>" + "First Name: " + myCurrentAddress.first + "\n" + "Last Name: " + myCurrentAddress.last + "\n" + "Birthday: " + myCurrentAddress.birth + "\n" + "Address: " + myCurrentAddress.address + "</p>");
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
    var address = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var CallThis = new address(returnName((name),0),returnName((name),1), birthday, address, phone,email)
    checkFunction(object);
    myAddresses.push(callThis);
  });
});
