var button=document.getElementById('btn');
var email=document.getElementById('email');
var form=document.getElementById('myform');
form.addEventListener('submit',function(event){
    event.preventDefault();
    submit();
});
function submit(){
    var email=document.getElementById('email');
    if(ValidateEmail(email))
        {
            console.log("Successfully submitted");
            alert("Successfully submitted");
            return true;
        }
        else{
            console.log("invalid");
            alert("invalid email");
            return false;
        }
   
}
function ValidateEmail(email)
{
    var format= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.value.match(format))
        {return true;
        }
    else{
        return false;
    }
       
}








