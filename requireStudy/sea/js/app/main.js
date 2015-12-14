/*define(function(require,exports,module){
	var sum=require("sum").sum;
	console.log(sum(1,2))
})*/


seajs.use(["bin/jquery","app/sum"],function($,S){
	console.log("main")
	console.log(S.sum(1,2))
})