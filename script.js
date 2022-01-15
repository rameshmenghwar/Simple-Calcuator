//function to calculate interest
function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("years").value;  
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
   
}
//function to update rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        //function to check principal value
function valchk()
{
var prval = document.getElementById("principal").value;
if (prval<=0)
{
alert("Enter a positive number");
document.getElementById("principal").focus();
}

}
