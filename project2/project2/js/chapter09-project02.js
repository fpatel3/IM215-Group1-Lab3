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