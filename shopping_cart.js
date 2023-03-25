var check_box=document.querySelector(".Check-Box");
var check_out_button=document.querySelector(".Check-Out-Button");


check_box.addEventListener("click",function()
{
    if(check_box.classList=="Check-Box 1")
    {
        check_box.classList.replace("1","2");
        check_out_button.classList.replace("Check-Out-Button","Check-Out-Button-Active");
    }
    else
    {
        check_box.classList.replace("2","1");
        check_out_button.classList.replace("Check-Out-Button-Active","Check-Out-Button");
        
    }
})




// if(check_box.checked==false)
// {
//     check_out_button.style['pointer-events']="none";
// }
// if(check_box.checked==true)
// {
//     check_out_button.style.cursor="pointer";
// }

