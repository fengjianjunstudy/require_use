
requirejs.config({
	baseUrl:"js/app",
	paths:{
	},
  shim: {
    hello:{
    	deps:[],
    	exports: 'hello'
    },
    hello1:{
    	init:function(){
    		return {
    			h1:h1,
    			h2:h2
    		}
    	}
    }
  },
  map:{
  	"*":{
  		"jQuery":"../bin/jquery-1.11.3.min",
  	},
  	"jquery1.9":{
  		"jQuery":"../bin/jquery-1.9.1.min"
  	}
  }
})
/*require(["jquery","math"],function($,math){
	math.sum(1,2);
})*/

//shirt.js
/*require(["jquery","app/shirt"],function($,person){
	console.log(person)
})*/

//shirtFnjs
/*require(["jquery","app/shirtFn"],function($,person){
	console.log(person)
})*/

//shirtDepFnjs
/*require(["jquery","app/shirtDepFn"],function($,result){
	console.log(result)

})*/

//toFn.js
/*require(["jquery","app/toFn"],function($,Person){
	var p1=Person("小花",18)
	p1.sayName();
	var p2=Person("小明",16);
	p2.sayAge();

})*/

//likeCommonJs.js
/*require(["jquery","app/likeCommonJs"],function($,obj){
	obj.person.sayName();
	obj.person.sayAge();

})*/

//likeCommonJs1.js
/*require(["jquery","app/likeCommonJs1"],function($,person){
	person.sayName();
	person.sayAge();

})*/

//defineModuleID.js

/*require(["jquery","app/defineModuleID"],function($,person){
	requirejs.undef("jquery")
	console.log(person)

})*/

//shim示例 hello.js

/*requirejs(["hello1","jquery"],function(hello,$){
	hello.h1();
	hello.h2();
})*/

//map示例 hello.js

requirejs(["jquery1.9"],function(jq){

})