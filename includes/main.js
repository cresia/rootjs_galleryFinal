/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	$( "#gallery" ).sortable();

	makeGallery(pictures);
	addModalCloseHandler();
	// displayImage();
}

function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		for (var i=0; i<imageArray.length; i++) {
			//create the elements needed for each picture, store the elements in variable
			var picFigure = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css('background-image', 'url(' + imageArray[i] + ')');
			var caption = $("<figcaption>").text(imageArray[i]);

			// console.log(imageArray[i]);
			picFigure.append(caption);

			//attach a click handler to the figure you create.  call the "displayImage" function.  
		
			//append the element to the #gallery section
			$("#gallery").append(picFigure);

			$(picFigure).click(displayImage);

		}
	
}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	

	//Notes:
	// 	.modal('show')
	// Manually opens a modal. Returns to the caller before the modal has actually been shown (i.e. before the shown.bs.modal event occurs).

	// Copy
	// $('#myModal').modal('show')
	// .modal('hide')
	// Manually hides a modal. Returns to the caller before the modal has actually been hidden (i.e. before the hidden.bs.modal event occurs).

	// Copy
	// $('#myModal').modal('hide')

	// .modal is for module window
	$(".modal img").click(function (){
        $(this).parents(".modal").modal("hide");
    });
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//background-image:url(images/landscape-1.jpg);
	var picUrl = $(this).css("background-image");


	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037

		var grabFirstIndex = picUrl.lastIndexOf("/") + 1;
		var grablastIndex = picUrl.lastIndexOf(".");

		var grabText =  picUrl.slice(grabFirstIndex, grablastIndex);
		

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	$(".modal-title").text(grabText);

	var indexSrc = picUrl.lastIndexOf("images");
	var lastindexSrc = picUrl.lastIndexOf("g") + 1;
	var grabsrcPic = picUrl.slice(indexSrc, lastindexSrc); 
	
	$("img").attr("src", grabsrcPic);


	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp

	$(this).click(function(){
		$("#galleryModal").modal();
	})

}





