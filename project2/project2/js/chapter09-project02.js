/* add code here */



    
function showImage(imgName,imgTitle) {
    var curImage = parent.document.getElementById('big-image');
    var curCaption = parent.document.getElementById('caption');

    var thePath = 'images/medium/';
    var theSource = thePath + imgName;
    //alert("The image is being changed..!");
   curImage.src = theSource;
   curImage.alt = imgName;
   curImage.title = imgTitle;

 
   curCaption.innerHTML = imgTitle;
}/*This is done by Foram*/

  


function getOpacity(isNext){
    var imgCaption = document.getElementById("caption");
    if(isNext){
        imgCaption.style.opacity = 0;
    }
    else{
        imgCaption.style.opacity = 0.8;
        
    }
    document.getElementById("caption").style.transition = "opacity 1s";  /*This is done by vaidehi*/
}/* This is done by Sharmin*/


