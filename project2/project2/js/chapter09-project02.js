/* add code here */



    
function showImage(imgName) {
    var curImage = parent.document.getElementById('big-image');
    var thePath = 'images/medium/';
    var theSource = thePath + imgName;
    //alert("The image is being changed..!");
   curImage.src = theSource;
   curImage.alt = imgName;
   curImage.title = imgName;
}

  
function getOpacity(eventInstance, isNext){
    if(isNext){
        document.getElementById("big-image").style.opacity = 0.8;
        document.getElementById("thumbnails").style.opacity = 0.8;
    }
    else{
        document.getElementById("big-image").style.opacity = 0.1 ;
        document.getElementById("thumbnails").style.opacity = 0.1 ;
    }
}/* Sharmin*/