var enteredText=""
var productcontainer = document.getElementById("product")
var productlist = productcontainer.querySelectorAll("div")
    

function check(event){
    enteredText= event.target.value.toUpperCase()

        
    for(var i=0;i<productlist.length;i++){

        var productName = productlist[i].querySelector("p").textContent;

        if(productName.toUpperCase().indexOf(enteredText)<0)
        {
            productlist[i].style.display="none"
        }
        else
        {
            productlist[i].style.display="block"
        } 
    }
}

