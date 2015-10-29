日历

功能：

	可以对年、月增减1,

	可以直接输入 年 、月

用法：
	Calendar({time:"2015,10,28",box:"..."})

	time 在没有设置的情况下 默认的为  本地的当前时间

	box 日历的容器 在没有设置的情况下  默认为body

	callback  option  Function   自定义函数默认的前三个参数是 year month(从1开始) day 三个  返回值必须是需要添加到对应li中的字符串

	hasChinaDay  设置为true时 显示农历、节气  否则不显示  默认情况为false 不显示

	callback 没有设置时  hasChinaDay的设置不起作用

	data.js  自定义数据



	http://ershisijieqi.baike.com/article-284624.html
