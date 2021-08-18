let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function(btn) {
        btn.onclick = function() {
          let modal = btn.getAttribute('data-modal');
          document.getElementById(modal)
            .style.display = "block";
        }
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function(btn) {
        btn.onclick = function() {
          let modal = btn.closest('.modal');
          modal.style.display = "none";
        }
      });
      window.onclick = function(event) {
        if(event.target.className === "modal") {
          event.target.style.display = "none";
        }
      }
function validateForm() {
  var x = document.forms["myform"]["name"].value;
  var age = document.forms["myform"]["age"].value;
  var gender = document.forms["myform"]["gender"].value;
  var state = document.forms["myform"]["state"].value;
  var phoneNo = document.forms["myform"]["mobile"].value;
  var l = document.forms["myform"]["mobile"].value.length;
  var address = document.forms["myform"]["address"].value
  var positive = document.forms["myform"]["positive"].value
  var diagnosis = document.forms["myform"]["diagnosis"].value
  console.log(positive)
  if(gen=="select"){
    alert("jj")
    return false;
  }
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if (age == "") {
    alert("Enter your age");
    return false;
  }
  if (age <18 || age>60) {
    alert("You are not eligible to donate, age should be (18-60)");
    return false;
  }
  if(positive==""){
    alert("Select positive confirmation report date")
    return false
  }
  if(diagnosis==""){
    alert("Select date of diagnosis")
    return false
  }
  if(gender=="select"){
    alert("Please select Gender")
    return false
  }
  if(phoneNo==""){
    alert(" Please enter your Mobile No.")
    return false
  }
  if(l<10 || l>10){
    alert("Not valid, Please enter 10-Digit Mobile No.")
    return false
  }
  if(address==""){
    alert("Enter your address")
    return false
  }
  if(state=="state"){
    alert("Please select your state")
    return false;
  }
  else{
    var txt;
  var r = confirm("Do you want to Register!");
  if (r == true) {
    txt = "Thank you! for showing interest in Plasma Donation";
  } else {
    txt = "Form not submitted";
  }
  document.getElementById("resultdonate").innerHTML = txt;
  
  }
}
function revalidateForm() {
  var x = document.forms["myform2"]["name"].value;
  var age = document.forms["myform2"]["age"].value;
  var gender = document.forms["myform2"]["gender"].value;
  var phoneNo = document.forms["myform2"]["phone"].value;
  var l = document.forms["myform2"]["phone"].value.length;
  var address = document.forms["myform2"]["address"].value
  var state = document.forms["myform2"]["state"].value
  var city = document.forms["myform2"]["city"].value
  var blood = document.forms["myform2"]["blood"].value
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if(gender=="select"){
    alert("Select your Gender")
    return false
  }
  if (age == "") {
    alert("Enter your age");
    return false;
  }
  if (age <18 || age>60) {
    alert("You are not eligible to donate, age should be (18-60)");
    return false;
  }
  if(blood==""){
    alert("Choose your blood group")
    return false;
  }
  if(state=="state"){
    alert("Please select your state")
    return false;
  }
  if(city==""){
    alert("Please enter your city")
    return false;
  }
  if(phoneNo==""){
    alert(" Please enter your Mobile No.")
    return false
  }
  if(l<10 || l>10){
    alert("Not valid, Please enter 10-Digit Mobile No.")
    return false
  }
  if(address==""){
    alert("Enter your address")
    return false
  }
  else{
    var txt;
  var r = confirm("Do you want to Register!");
  if (r == true) {
    txt = "Registration successful";
  } else {
    txt = "Form not submitted";
  }
  document.getElementById("resultrequest").innerHTML = txt;
  
  }
}
