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
