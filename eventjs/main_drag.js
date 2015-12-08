requirejs.config({
	baseUrl:"js/bin",
	paths:{
		app:"../app"
	}
});
requirejs(["app/Drag"],function(Drag){
	Drag(document.getElementById("drag"))

})