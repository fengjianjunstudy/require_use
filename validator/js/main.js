requirejs.config({
	baseUrl:"js/bin",
	paths:{
		app:"../app",
		jquery:"jquery-1.11.3.min"
	}
});
requirejs(["jquery","app/reg"],function($,reg){
	var data={
		dom:"#user_name",
		tag:"div",
		//eType:"change",
		vtypes:["isNonEmpty","isNumber"],
		emes:["用户名不能为空","用户名只能为数字"],
		eclass:"err",
		rclass:"right"
	}
	reg(data)
	reg()
	
})
