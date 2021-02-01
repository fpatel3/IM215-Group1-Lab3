/* add code here */



    
function showImage(imgName) {
    var curImage = parent.document.getElementById('featured');
    var thePath = 'images/medium/';
    var theSource = thePath + imgName;
   curImage.src = theSource;
   curImage.alt = imgName;
   curImage.title = imgName;
}

  