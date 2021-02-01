/* add code here */



    
function showImage(imgName) {
    var curImage = parent.document.getElementById('featured');
    var thePath = 'images/medium/';
    var theSource = thePath + imgName;
   curImage.src = theSource;
   curImage.alt = imgName;
   curImage.title = imgName;
}

  
function getOpacity(eventInstance, isNext){
    if(isNext){
        document.getElementById("featured").style.opacity = 0.8;
        document.getElementById("thumbnails").style.opacity = 0.8;
    }
    else{
        document.getElementById("featured").style.opacity = 0.1 ;
        document.getElementById("thumbnails").style.opacity = 0.1 ;
    }
}/* Sharmin*/