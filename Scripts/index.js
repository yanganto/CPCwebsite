function Initial(){
		$('.top-out').corner("20px top").corner("notch 10px bottom");
		$('.top').corner("20px top").corner("jut 20px bottom");
		$('.nav').corner("notch 10px");
		$('.content-out').corner("notch 10px top");//.corner("fray 10px bottom");
		$('.content').corner("jut 20px");
		$('.footer').corner("20px bottom");//.corner("wicked 10px top");
		//$('li').first().addClass('active').css("color", "#FFFFFF");
}

function Select(href){
	if (href.substring(0, 4) == "http"){
		window.open(href)
	}else{
		$('.content-if').css("display","none");
		$('.content-if').attr("src", href );
		$('.content-if').fadeIn( 'slow' );
	};
}

function SetCwinHeight(){
var iframeid=document.getElementById("iframeid"); //iframe id
if (document.getElementById){
   if (iframeid && !window.opera){
   if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight){
   iframeid.height = iframeid.contentDocument.body.offsetHeight;
   }else if(iframeid.Document && iframeid.Document.body.scrollHeight){
   iframeid.height = iframeid.Document.body.scrollHeight;
   }
   }
}
}