window.onload=initAll;
//this is the javascript file for the contact.html
function initAll() { 
	document.getElementById('submess').onclick = validate
	initialize()

}

//this is the code for the google maps on contact.html page and is loaded in the body tag
var map;
var latitude=53.260753;
var longitude=-6.309569;
function initialize() {    
	var yourLocation = new google.maps.LatLng(latitude, longitude);
	
	var myOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: yourLocation
    }
		
	map = new google.maps.Map(document.getElementById("map"), myOptions);
		
	var marker = new google.maps.Marker({
		position: yourLocation,
		title:"DSPCA Campus"
	});
		
	marker.setMap(map);
			
}

//this function validates the form on the contact.html using the onClick attribute on the submit button
function validate(){
	     if(document.form.name.value.length == 0)
        {
          window.alert("Please Enter Your Name");
          return false;
        }
		if(document.form.email.value.length == 0)
        {
          window.alert("Please Enter your Email Address");
          return false;
        }
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = document.form.email.value;
        if(reg.test(address) == false) {
            alert('Invalid Email Address');
            return false;
        }
		else{
			alert('Thank for this message');
		}
}


//shows current date in the top right hand corner of each page
function ShowDate(){
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	document.write(day+"/"+month+"/"+year)
}
