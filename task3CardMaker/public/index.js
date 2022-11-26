var image;
var clonedImage;
var win;
var radioButtons = document.getElementsByName("image");
function changeBorder(Image) {
    if(image!=undefined){
        image.style.border="";
    }
    console.log(Image);
    Image.style.border="5px solid red";
    image = Image;
}
/*function init(){
    var clonedImage = image.cloneNode(true);
    var card = document.createElement("img");
    card.innerHTML=clonedImage;
    document.body.append(clonedImage);
}*/

function createCard(){
    var myImage
    win = open("card.html","","width=500px , height=600px");
    var message = document.createElement("h2");
    message.innerText=document.getElementById("message").value;
    win.document.write("The Card :");
    win.document.body.appendChild(message);
    for (let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked){
            
            myImage=radioButtons[i].nextElementSibling.firstElementChild;
            console.log(myImage);
        }    
    }
    //location.assign("card.html");
    var clonedImage = myImage.cloneNode(true);
    console.log(clonedImage);
    //var card = win.document.createElement("img");
    //win.document.write("sdsa")
    //card.innerHTML=clonedImage;
    //console.log(card);
    //card.innerHTML="fasdfas";
    win.document.body.append(clonedImage);
    
   // win.document.body.appendChild(message);
}