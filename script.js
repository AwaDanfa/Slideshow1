// JavaScript Document
var curPic, model, phoneCoverColor, qty, currentImage, price = undefined;

 function init(){
	phoneCoverColor = document.getElementById("phoneCoverColor");
	model = document.getElementById('model');
	qty = document.getElementById("qty");
	price = 14.99;
    currentImage = "images/red.jpg"
 }

function changeMainImage(){

	document.getElementById("mainImg").src="images/"+phoneCoverColor.value+".JPg";
	document.getElementById("modelColor").innerHTML = "&nbsp; &nbsp &nbsp;<b>"+phoneCoverColor.value+"</b>";
	
}



function changeOnMouseOver(id){
	curPic = id.src;
	document.getElementById("mainImg").src= curPic;
    
	
	}
 
 function revertOnMouseOut(){
   
	document.getElementById("mainImg").src= currentImage;
 }

 function setOnMouseClick(id){
   
	curPic = id.src;
    currentImage = curPic
	document.getElementById("mainImg").src= currentImage;
 }

 
 $(document).ready(function(){
    $(".hidden_content").hide();

    $(".show_hide").on("click", function(){


        var btn = $(this);
        var btnCaption = undefined;


        if($ (".hidden_content").is(":visible")) {
            btnCaption = "Read More";
            btnCaption += "<img class ='sign' src='images/open.png'/>";

        } else {
           btnCaption = "Read Less";
           btnCaption += "<img class ='sign' src='images/close.png'/>";

        }

$(this).prev(".hidden_content").slideToggle(200, function(){

$(btn).html(btnCaption);
}); 

});

});//end of ready() method









