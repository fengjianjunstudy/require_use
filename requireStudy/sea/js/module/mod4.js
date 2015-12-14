//模块扩张
var module1=(function(mod){
	mod.a1=function(){
		console.log("a1");
	}
	mod.a2=function(){
		console.log("a2")
	}
	return mod;
})(window.mod||{});
var module=(function(mod){
	var _count=10;
	var m1=function(){
		console.log(--_count);
	}
	var m2=function(){
		console.log(++_count);
	}
	mod.m1=m1;
	mod.m2=m2;
	return mod;
})(window.module1 || {});
module.a1();
module.m2();