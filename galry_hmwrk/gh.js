function upDate(previewPic){
	document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
  var alt;
	alt=document.getElementById("image");
	alt.innerHTML=previewPic.alt;
}
function unDo(){
	document.getElementById('image').style.backgroundImage = "url('')";
	var alt;
	alt=document.getElementById("image");
	alt.innerHTML="Hover over an image below to display here.";
}
