define(["Cookie"],function(Cookie){ 
	var input_name=document.getElementById("name");
	var oAdd=document.getElementById("add");
	var oEmail=document.getElementById("email")
	var oRemoveAll=document.getElementById("removeAll");
	var oRemoveName=document.getElementById("removeName")
	oAdd.onclick=function(){ 
		var val=input_name.value;
		Cookie.setCookie("name",val).setCookie("email",oEmail.value);
		console.log(Cookie.cookies)
	}
	/*oEmail.onchange=function(){ 
		Cookie.setCookie("email",this.value);
		console.log(Cookie.cookies)
	}*/
	oRemoveAll.onclick=function(){ 
		Cookie.deleteCookie();
		console.log(Cookie.cookies)
	}
	oRemoveName.onclick=function(){ 
		Cookie.deleteCookie("name");
		console.log(Cookie.cookies)
	}
	
})