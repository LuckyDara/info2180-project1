/* Add your JavaScript to this file */

function submitEmail(){
    if(document.getElementById("email").value==""){
        document.getElementById("email").value="Please enter valid email";
    }else{
        document.getElementById("email").value= "Thank you! Your email address "+document.getElementById("email").value+" has been added to our mailing list."
    }
}