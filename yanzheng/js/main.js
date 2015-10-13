define(["CheckValid"],function(CheckValid){ 
	require.config({ 
	});
	document.getElementById("QQ").onchange=function(){ 
		var type=this.data("type");
		var 
		CheckValid[type](this);
	}
})