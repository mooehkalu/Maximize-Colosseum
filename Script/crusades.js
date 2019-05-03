jQuery(document).ready(function($){
    
var progress = 20;
var picSource = document.getElementById("mark-complete").src;					

var notcomplete = "https://mooehkalu.github.io/Maximize-Colosseum/images/crusades-mark/Mark-Not-Complete.png";

var completed = "https://mooehkalu.github.io/Maximize-Colosseum/images/crusades-mark/Mark-Completed.png";


function changePic() {
  
if (picSource == notcomplete) {
    
picSource = completed;
  } 
else {
    
picSource = notcomplete;
  }
}

document.getElementById("btn").onclick = function() {
  
changePic();
  
document.getElementById("mark-complete").src = picSource;						    

}
						    
    
$("#s11id input").on('change', function(){
        
if ($("#s11id input").is(":checked") === true) {
        
progress = progress+5;
        $('#blips > .xp-progress').attr("style","width:" + progress + "%");
        
}
        
else if ($("#s11id input").is(":checked") === false) {
        
progress = progress-5;
        
$('#blips > .xp-progress').attr("style","width:" + progress + "%");
        
}
    });
  
});

document.getElementById("btn2").onclick = function() {
  
changePic();
  document.getElementById("mark-complete").src = picSource;						    

}
	document.getElementById("btn2").onclick = function() {
  
changePic();
  
document.getElementById("mark-complete").src = picSource;						    

}
	document.getElementById("btn2").onclick = function() {
  
changePic();
  
document.getElementById("mark-complete").src = picSource;						    

}
	document.getElementById("btn2").onclick = function() {
  
changePic();
  document.getElementById("mark-complete").src = picSource;						    

}
	
document.getElementById("btn2").onclick = function() {
  
changePic();
  
document.getElementById("mark-complete").src = picSource;						    

}
	document.getElementById("btn2").onclick = function() {
  
changePic();
  document.getElementById("mark-complete").src = picSource;						    

}
	document.getElementById("btn2").onclick = function() {
  
changePic();
  
document.getElementById("mark-complete").src = picSource;						    

}
	