console.log("eee")
requirejs.config({
	baseUrl:"js/bin",
	paths:{
		app:"../app"
	}
})
requirejs(["app/Animate"],function(Animate){
	var animateDiv=document.getElementById("animateDiv");
	Animate({
		dom:animateDiv,
		styles:{
			left:300,
			top:100
		},
		allTime:10000,
		ease:"Linear"
	})

})