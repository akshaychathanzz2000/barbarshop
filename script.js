var menubtn=document.getElementById("menubtn")
var sidenav =document.getElementById("sidenav")
var menu=document.getElementById("menu")

menubtn.onclick=function(){
    if(sidenav.style.right =="-300px"){
        sidenav.style.right="0";
        menu.src="images/close.png"
    }
    else{
        sidenav.style.right="-300px"
        menu.src="images/menu.png"

    }
}

