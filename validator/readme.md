表单验证

用到了 requirejs  和设计模式之策略者模式

策略者模式：将算法和算法的使用者分别分装，来达到低耦合

validat.js  表单验证算法封装

tooltip.js  插入提示信息及显示

reg.js 数据整理及事件绑定

用法：

方法一：设置标签属性

eg:

<input type="text" id="china_name" class="input_box J_v" data-tag="div" data-etype="change" data-vtypes="isNonEmpty" data-emes="姓名不能为空" data-eclass="err" data-rclass="right" data-pNode="">

在需要验证的表单节点上添加 J_v  class

data-tag:定义提示信息的标签  默认的为 span

data-etype:事件类型

data-vtypes：需要验证的类型集合 每个类型之间用空格隔开  eg：不能为空 必须为数字 对应的validat.js 中的isNonEmpty 和 isNumber 方法

注意：多个类型时注意先后顺序，假如前面的类型验证错误时，会提示该类型对应的提示信息，后面的验证类型不会验证

data-emes:错误时的提示信息  只有一条时那么多个验证类型的提示都一样  多条提示信息之间用空格隔开  每条对应 data-vtypes 中的类型

data-eclass：错误提示时对应的错误className

data-rclass：正确提示时对应的正确className

data-pNode：提示信息插入的位置的parent  默认为当前表单节点的parent

最后：调用 reg()即可


方法二：reg(obj)  obj 是一个包含所有信息的对象

eg:var data={
		dom:"#user_name",
		tag:"div",
		etype:"change",
		vtypes:["isNonEmpty","isNumber"],
		emes:["用户名不能为空","用户名只能为数字"],
		eclass:"err",
		rclass:"right"
	}


dom:验证节点

tag：同 data-tag   

其他的同方法一中的data-用意相同

最后：reg(data)

注意：两种方法均可以使用，建议同一页面用统一的方法，方法一应该会方便，只需在需要验证的节点添加对应的属性即可，只需调用一次reg就可以全部绑定
