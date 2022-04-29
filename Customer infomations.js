function validateform() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var Age= document.getElementById("Age").value;
    var Telephone = document.getElementById("Telephone").value;
    
    var course = document.getElementById("course").value;
    

    if (!firstname) {
        alert("Name can't be blank");
        return false;
    }
    if (!lastname) {
        alert("Name can't be blank");
        return false;
    }
    if (!Telephone) {
        alert("Telephone can't be blank.");
        return false;

    }


    if (!course) {
        alert("course can't be blank.");
        return false;
    }

     else if(!Age) {
        alert("Age can't be blank.");
        return false;

    }}
