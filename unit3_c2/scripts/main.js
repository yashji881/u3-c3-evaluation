
var userdata=JSON.parse(localStorage.getItem("user"))|| [];

function signupfn(event){
event.preventDefault();

var userobj={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    address:document.getElementById("address").value,
  wallet:document.getElementById("amount").value,
  
}
userdata.push(userobj);
localStorage.setItem("user",JSON.stringify(userdata));

document.getElementById("name").value=null;
document.getElementById("email").value=null;
document.getElementById("address").value=null;
document.getElementById("amount").value=null;

}