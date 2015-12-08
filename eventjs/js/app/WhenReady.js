var WhenReady=(function(){
	var funcs=[];
	var ready=false;
	function handler(e){
		console.log(e)
		if(ready){
			return ;
		}
		if(e.type === "readystatechange" && document.readyState !=="complete"){
			return ;
		}

		for(var i=0;i<funcs.length;i++){
			funcs[i].call(document)
		}
		ready=true;
		funcs=null;
	}
	if(document.addEventListener){
		document.addEventListener("readystatechange",handler,false);
		document.addEventListener("DOMContentLoaded",handler,false);
		window.addEventListener("load",handler,false);
	}else if(document.attachEvent){
		document.attachEvent("onreadystatechange",handler)
		window.attachEvent("onload",handler)

	}else{
		window.onload=handler
	}
	return function(fn){
		if(ready){
			fn.call(document);
		}
		funcs.push[fn]
	}

})();
