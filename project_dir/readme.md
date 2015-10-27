baseUrl  默认的路径是data-main中文件所在的文件夹
require 加载模块  没有返回值 不能被别的模块引用
define  定义模块  需要有返回值  可以被别的模块引用   依赖模块的路径以当前文件所在的文件夹为基础

requirejs 
AMD模式 
优点：按需加载  解决依赖关系   避免污染全局变量 

用法：
一、简单的键值对 define({});
二、函数  define(function(){})
三、存在依赖关系 define(["mod1路径","mod2路径"],function(mod1,mod2){ })
四、简单包装CommonJs来定义模块
define(function(require,exports,module){ 
	var a=require("a"); 加载模块a 

	return ...
	或者暴露接口
	exports.aa=function(){}
	exports.bb=...
	或者暴露接口
	module.exports={ 
		aa:function(){},
		bb:...
	}
})



require.config({
	配置信息
	baseUrl:"...",
	paths:"...",
	packages:["mod1","mod2"]  “packages”配置项来设置相对于require.s的各个包，“main”是RequireJS默认的包主模块
	如果mod2包中的主模块不是main.js而是index.js 需要这样写  packages:["mod1",{name:"mod2",main:"index"}]
	.
	.
	.  
	other configs
});
require(["mod1","mod2"],function(mod1,mod2){ })

