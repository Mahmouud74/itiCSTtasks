var topImage= document.getElementById("top");
var topLocation = getComputedStyle(topImage).bottom;
var leftImage= document.getElementById("img1");
var leftLocation = getComputedStyle(leftImage).left;
var rightImage= document.getElementById("img2");
var rightLocation = getComputedStyle(rightImage).right;
var topImageLoc=parseInt(topLocation);
var leftImageLoc=parseInt(leftLocation);
var rightImageLoc=parseInt(rightLocation);
var movementInterval;
document.getElementById("movement").addEventListener("click",function(){
    if(this.value=="move"){
        this.value="stop";
        movementInterval=setInterval(function(){
            console.log(topImageLoc);
            //topImageLoc+=10
            if(topImageLoc==450 && leftImageLoc==450 && rightImageLoc ==450){
                var backInterval=setInterval(function () {
                    topImageLoc-=10;
                    leftImageLoc-=10;
                    rightImageLoc-=10
                    if(topImageLoc<=0){
                        clearInterval(backInterval);
                    }
                    topImage.style.bottom=topImageLoc+"px";
                    leftImage.style.left=leftImageLoc+"px";
                    rightImage.style.right=rightImageLoc+"px";

                },200)
                //topImageLoc-=450;
            }
            else{
                topImageLoc+=10
                leftImageLoc+=10;
                rightImageLoc+=10;

            }
            topImage.style.bottom=topImageLoc+"px";

            leftImage.style.left=leftImageLoc+"px";

            rightImage.style.right=rightImageLoc+"px";
        },200)
        console.log("hello");
    }
    else{
        this.value="move";
        clearInterval(movementInterval);
    }
});
document.getElementById("reset").addEventListener("click",function(){
    topImage.style.bottom="0px";
    leftImage.style.left="0px";
    rightImage.style.right="0px";
})