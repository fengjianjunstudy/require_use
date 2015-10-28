/*
	@time 2015/10/28
	@auth fjj
	@function  日历
*/
requirejs.config({
	paths:{ 
		"jquery":"../bin/jquery-1.11.3.min"
	}
});
define(["jquery"],function($){ 
	var Calendar=function(opt){ 
		/*
			@property box  日历的容器
			@property time 时间
		*/
		this.box=opt.box || "body";
		this.time=new Date(opt.time) ||new Date();
		this.callback=opt.callback;
		this.hasInit=false;

		if(!(this instanceof Calendar)){ 
			return new Calendar(opt)
		}
		this.init();
	}
	Calendar.prototype={
		constructor:"Calendar",
		init:function(){
			if(this.hasInit){ 
				return ;
			}
			this.disDom(this.parseDate());
			this.hasInit=true;
			var _self=this;
			//年份增加
			$(this.box+" .year_add").on("click",function(){ 
				var yearVal=$(_self.box+" .year").val();
				_self.setTimeYear(++yearVal);
				$(_self.box+" .year").val(yearVal)
			})
			//年份减少
			$(this.box+" .year_sub").on("click",function(){
				var yearVal=$(_self.box+" .year").val();
				yearVal=(yearVal<=1970)?1970:--yearVal
				_self.setTimeYear(yearVal);
				$(_self.box+" .year").val(yearVal)
			})
			//月增加
			$(this.box+" .month_add").on("click",function(){ 
				var monthVal=$(_self.box+" .month").val();
				monthVal=(monthVal>=12)?12:++monthVal;
				_self.setTimeMonth(monthVal-1);
				$(_self.box+" .month").val(monthVal)
			})
			//月减少
			$(this.box+" .month_sub").on("click",function(){
				var monthVal=$(_self.box+" .month").val();
				monthVal=(monthVal<=1)?1:--monthVal;
				_self.setTimeMonth(monthVal-1);
				$(_self.box+" .month").val(monthVal)
			})
			//year 文本框中的内容改变
			$(this.box+" .year").on("change",function(){ 
				var yearVal=$(this).val();
				yearVal=(yearVal<=1970)?1970:yearVal;
				_self.setTimeYear(yearVal);
				$(this).val(yearVal)

			})
			//month 文本框中的内容改变
			$(this.box+" .month").on("change",function(){ 
				var monthVal=$(this).val();
				monthVal=(monthVal<=1 || monthVal>=12)?1:monthVal;
				$(this).val(monthVal)
				_self.setTimeMonth(--monthVal);

			})
			//确定
			$(this.box+" .sure").on("click",function(){ 
				var dateObj=_self.parseDate();
				_self.disDom(dateObj);
			})

		},
		setTimeYear:function(num){ 
			this.time.setFullYear(num);
			var dateObj=this.parseDate();
			this.disDom(dateObj);
		},
		setTimeMonth:function(num){ 
			this.time.setMonth(num);
			var dateObj=this.parseDate();
			this.disDom(dateObj);
		},
		parseDate:function(){ 
			var dateObj={},
				newDate;
			dateObj.year=this.time.getFullYear();
			dateObj.month=this.time.getMonth();
			dateObj.week=this.time.getDay();
			newDate=new Date(dateObj.year,dateObj.month,1);
			dateObj.n=newDate.getDay();
			dateObj.day=getDayNum(dateObj.year,dateObj.month+1)
			
			function getDayNum(year,month){ 
				var veadar=!(year%400)||(!(year%4)&&(year%100));
				var num;
				switch(month){
					case 2:
						num=veadar?29:28;
						break;
					case 1:
					case 3:
					case 5:
					case 7:
					case 8:
					case 10:
					case 12:
						num=31;
						break; 
					default:
						num=30;
				}
				return num;
			}
			return dateObj;

		},
		disDom:function(dateObj){ 
			if(!this.hasInit){ 
				var cal=$("<div></div>",{"class":"cal_box"})
				var head=$("<div></div>",{"class":"cal_head"});
				cal.append(head)
				var year_add=$("<span></span>",{"class":"btn year_add"});
				year_add.html("+")
				head.append(year_add);
				var year_input=$("<input/>",{"type":"text","class":"year","value":dateObj.year})
				head.append(year_input);
				var year_sub=$("<span></span>",{"class":"btn year_sub"});
				year_sub.html("-")
				head.append(year_sub);
				var month_add=$("<span></span>",{"class":"btn month_add"});
				month_add.html("+")
				head.append(month_add);
				var month_input=$("<input/>",{"type":"text","class":"month","value":dateObj.month+1})
				head.append(month_input);
				var month_sub=$("<span></span>",{"class":"btn month_sub"});
				month_sub.html("-")
				head.append(month_sub);
				var sureBtn=$("<span class='sure'>确定</span>")
				head.append(sureBtn)
				var week_list=$("<ul></ul>",{"class":"week_list"});
				week_list.html("<li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>")
				cal.append(week_list)
				var day_list=$("<ul></ul>",{"class":"day_list"});
				cal.append(day_list)
				$(this.box).append(cal)	
			}
			var day_list=$(".day_list");
			var day=dateObj.day;
			var year=this.time.getFullYear();
			var month=this.time.getMonth()+1;
			var callback=this.callback;
			var htmlStr="";
			for(var i=1;i<=42;i++){ 
				if(i<=dateObj.n){ 
					htmlStr+="<li></li>";

				}else if((i-dateObj.n)<=dateObj.day){ 
					var liStr="";
					if(typeof callback ==="function"){ 
						var dateStr=callback(year,month,(i-dateObj.n))
					}else{ 
						var dateStr=i-dateObj.n;
					}
					htmlStr+="<li>"+dateStr+"</li>";
				}
			}
			day_list.html(htmlStr)
		}

	}
	return Calendar;
})