//立即执行函数

var module=(function(){
	var _count=10;
	var m1=function(){
		console.log(--_count);
	}
	var m2=function(){
		console.log(++_count);
	}
	return {
		m1:m1,
		m2:m2
	}
})();
console.log(module._count)
module.m1()
module.m2()