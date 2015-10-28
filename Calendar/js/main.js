require(["Calendar","data"],function(Calendar,data){ 
	function handleLi(year,month,day){
		var day1=day<10?("0"+day):day; 
		var data_key="cal"+year+month+day1;
		var liChildStr="";
		if(data[data_key]){ 
			liChildStr+=day;
			liChildStr+="<span></span>";
		}else{ 
			liChildStr=day;
		}
		return liChildStr
	}
	Calendar({time:"2015,10,28",callback:handleLi})
})