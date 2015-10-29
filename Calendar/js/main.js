require(["Calendar","data","CalculationSolarTerms","CalculationChina"],function(Calendar,data,SolarTerm,china_time){ 
	function handleLi(year,month,day,hasChinaDay){
		var day1=day<10?("0"+day):day; 
		var month1=month<10?("0"+month):month;
		var data_key="cal"+year+month+day1;
		var liChildStr="";
		var china_festival=[""]
		liChildStr+=day;
		
		if(data[data_key]){ 
			liChildStr+="<span></span>";
		}
		if(hasChinaDay){ 
			var dayObj=new Date(year,month-1,day);
			var jieqi=SolarTerm(dayObj);
			if(!jieqi && !data["*"+month1+day1]){ 
				var chinaDate=china_time(dayObj)
				switch(chinaDate){ 
					case "正月初一":
						liChildStr+="<div class='c1'>"+"春节"+"</div>"
						break;
					case "正月十五":
						liChildStr+="<div class='c1'>"+"元宵节"+"</div>"
						break;
					case "五月初五":
						liChildStr+="<div class='c1'>"+"端午节"+"</div>"
						break;
					case "七月初七":
						liChildStr+="<div class='c1'>"+"七夕节"+"</div>"
						break;
					case "七月十五":
						liChildStr+="<div class='c1'>"+"中元节"+"</div>"
						break;
					case "八月十五":
						liChildStr+="<div class='c1'>"+"中秋节"+"</div>"
						break;
					case "九月初九":
						liChildStr+="<div class='c1'>"+"重阳节"+"</div>"
						break;
					case "腊月初八":
						liChildStr+="<div class='c1'>"+"腊八节"+"</div>"
						break;
					default:
						liChildStr+="<div>"+chinaDate+"</div>"
				}
				
			}else if(data["*"+month1+day1]){
				liChildStr+="<div class='c1'>"+data["*"+month1+day1]+"</div>"
				
			}else{ 
				liChildStr+="<div class='c1'>"+jieqi+"</div>"
			}	
		}
		
		return liChildStr;
	}
	Calendar({time:"2015,10,28",callback:handleLi,hasChinaDay:true})
})