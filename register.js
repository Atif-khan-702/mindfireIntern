function myFunction(value) {
	var col = document.getElementById('demo').value;
  document.body.style.backgroundColor = col;
}

function insertRecord(){
  
  if(document.getElementById('fname').value.trim()==""){
    fname.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('lname').value.trim()==""){
    lname.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('fatherName').value.trim()==""){
    fatherName.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('motherName').value.trim()==""){
    motherName.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('blood').value.trim()==""){
    blood.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('email').value.trim()==""){
    email.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('mobile').value.trim()==""){
    mobile.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('adhar').value.trim()==""){
    adhar.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('gender').value.trim()==""){
    gender.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('dob').value.trim()==""){
    dob.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('marry').value.trim()==""){
    marry.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('country').value.trim()==""){
    country.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('state').value.trim()==""){
    state.style.border = "solid 1px red";
    return false;
  }
  else if(document.getElementById('city').value.trim()==""){
    city.style.border = "solid 1px red";
    return false;
  }else{

    var table = document.getElementById("mytable");
    var row = table.insertRow();
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(12);
    var cell14 = row.insertCell(13);
    var cell15 = row.insertCell(14);
    var cell16 = row.insertCell(15);
    var cell17 = row.insertCell(16);
    
    cell1.innerHTML = document.getElementById('fname').value.trim();
    cell2.innerHTML = document.getElementById('mname').value.trim();
    cell3.innerHTML = document.getElementById('lname').value.trim();
    cell5.innerHTML = document.getElementById('motherName').value.trim();
    cell4.innerHTML = document.getElementById('fatherName').value.trim();
    cell6.innerHTML = document.getElementById('blood').value.trim();
    cell7.innerHTML = document.getElementById('email').value.trim();
    cell8.innerHTML = document.getElementById('mobile').value.trim();
    cell9.innerHTML = document.getElementById('gender').value.trim();
    cell10.innerHTML = document.getElementById('marry').value.trim();
    cell11.innerHTML = document.getElementById('adhar').value.trim();
    cell12.innerHTML = document.getElementById('dob').value.trim();
    cell13.innerHTML = document.getElementById('country').value.trim();
    cell14.innerHTML = document.getElementById('state').value.trim();
    cell15.innerHTML = document.getElementById('city').value.trim();
    cell16.innerHTML = '<p style="color:blue;">Edit Record</p>';
    cell17.innerHTML = '<p style="color:red;" onclick="deleteRow(this);">Delete Record</p>';

  }
 

}

// function createButton(value){
//   var btn = document.createElement("BUTTON");
//   var t = document.createTextNode(value);

//   btn.setAttribute("style","color:red;font-size:10px");

//   btn.appendChild(t);
//   document.body.appendChild(btn);

// }

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
}

function populate1(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML="";
  if(s1.value=='India'){
    var stateArray = ["|select","Jharkhand|Jharkhand","Bihar|BIhar","Uttar pardesh|Uttar pardesh"];
  }else if(s1.value=='Australia'){
    var stateArray = ["|select","Victoria|Victoria","Queensland|Queensland"];
  }else if(s1.value=='America'){
    var stateArray = ["|select","Alaska|Alaska","California|California","New York|New York"];
  }
  for(option in stateArray){
    var pair=stateArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value=pair[0];
    newOption.innerHTML=pair[1];
    s2.options.add(newOption);
  }
}

function populate2(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML="";
  if(s1.value=='Bihar'){
    var stateArray = ["|select","Gaya|Gaya","Patna|Patna","Nalanda|Nalanda"];
  }else if(s1.value=='Jharkhand'){
    var stateArray = ["|select","Ranchi|Ranchi","Tatanagar|Tatanagar","Dhanwad|Dhanwad"];
  }else if(s1.value=='Uttar pardesh'){
    var stateArray = ["|select","Banaras|Banaras","Lucknow|Lucknow","Agra|Agra"];
  }else if(s1.value=='Victoria'){
    var stateArray = ["|select","Hamilton|Hamilton","Kerang|Kerang","Swan Hill|Swan Hill"];
  }else if(s1.value=='Queensland'){
    var stateArray = ["|select","Brisbane|Brisbane","Gladstone|Gladstone","Emerald|Emerald"];
  }else if(s1.value=='Alaska'){
    var stateArray = ["|select","Anchorage|Anchorage","Fairbanks|Fairbanks"];
  }else if(s1.value=='California'){
    var stateArray = ["|select","Vacaville|Vacaville","Sacramento|Sacramento"];
  }else if(s1.value=='New York'){
    var stateArray = ["|select","Abbott Road|Abbott Road","Abell Corners|Abell Corners"];
  }

  for(option in stateArray){
    var pair=stateArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value=pair[0];
    newOption.innerHTML=pair[1];
    s2.options.add(newOption);
  }

}