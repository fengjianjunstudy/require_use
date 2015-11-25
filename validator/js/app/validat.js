define(["jquery"],function($){
	function Validator(){

	}
	Validator.prototype={
		constructor:"Validator",
		isNonEmpty:function(val){  // 验证给定的值是否不为空
			return val !== "";
		},
		isNumber:function(val){ // 验证给定的值是否是数字
			return !isNaN(val);
		},
		isAlphaNum:function(val){ // 验证给定的值是否只是字母或数字
			return !/[^a-z0-9]/i.test(val)
		}
	}
	return new Validator();
});