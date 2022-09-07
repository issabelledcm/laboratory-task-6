function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["minit"].value;
    var z = document.forms["myForm"]["lname"].value;
    var a = document.forms["myForm"]["email"].value;
    if (x == "" && y == "" && z == "") {
      alert("All fields must be filled out");
      return false;
    }
    if (x == "" || y == "" || z == "") {
      return false;
    }
    if (a ==""){
      return false;
    }
    else{
      alert("Success!");
    }
  }