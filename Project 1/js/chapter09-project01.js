window.addEventListener('load', function(){
    
 
  var form=document.getElementById("mainForm");
  form.addEventListener("submit", submissionCheck);

  function submissionCheck(event){
    var requiredInputs = document.querySelectorAll(".required");
    for(i=0; i < requiredInputs.length; i++){
      if(requiredInputs[i].value == "") {
        event.preventDefault();
        requiredInputs[i].classList.add("error");
      }
     else {
        requiredInputs[i].classList.remove("error");
      }
    }
  }

  form.addEventListener("reset", resetForm)

  function resetForm(event){
    var requiredInputs = document.querySelectorAll(".required");
    for(i=0; i < requiredInputs.length; i++){
      requiredInputs[i].classList.remove("error");
    }
  }

    var highlightablelnputs = document.querySelectorAll(".hilightable") ; 
    for(i=0; i < highlightablelnputs.length; i++){ 
    var toggle = (event) => { event. target. classList. toggle('highlight') }
    highlightablelnputs[i].addEventListener('focus', toggle) 
    highlightablelnputs[i].addEventListener('.blur', toggle)

    }
})
