function validateForm() {
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var emaile = document.forms["myForm"]["email"].value;
  var mobile = document.forms["myForm"]["mobile"].value;
  var address = document.forms["myForm"]["address"].value;
  var fatherName = document.forms["myForm"]["fatherName"].value;
  var motherName = document.forms["myForm"]["motherName"].value;
  var nation = document.forms["myForm"]["nation"].value;
  var adhar = document.forms["myForm"]["adhar"].value;
  if (fname == "") {
    alert("First Name must be filled out");
    return false;
  }
  if (lname == "") {
    alert("Last Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (mobile == "") {
    alert("Mobile Number must be filled out");
    return false;
  }
  if (address == "") {
    alert("Address must be filled out");
    return false;
  }
  if (fatherName == "") {
    alert("Father Name must be filled out");
    return false;
  }
  if (motherName == "") {
    alert("Mother Name must be filled out");
    return false;
  }
  if (nation == "") {
    alert("Nationality must be filled out");
    return false;
  }
  if (adhar == "") {
    alert("must be filled out");
    return false;
  }
}