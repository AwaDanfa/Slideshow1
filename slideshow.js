
	$(document).ready(function (){
	   //define my variables
		var current = 1;
	
		var mainImgSrc = $("#main_image").attr("src");


	//function for clicking on the right arrow
	$(document).on('click', '#arrowRight', function(){
		$("#image").fadeOut(500, function(){
				current=current+1;
				if (current == 5)
				current = 1;
				$("#image").attr("src","images/"+current+".jpg").fadeIn(500);
			
			});
		})


    //function for clicking on the right arrow
    $(document).on('click', '#arrowLeft', function(){
	    $("#image").fadeOut(500, function(){
		        current=current-1;
		        if (current<1)
		        current = 5;
		        $("#image").attr("src","images/"+current+".jpg").fadeIn(500);
	
	        });
        })
    })