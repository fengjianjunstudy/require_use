define(["CheckErrMes","CheckToolTip"],function(errMes,tip){
	function CheckValid(){
		this.tip=tip; 
	}
	CheckValid.prototype={
		QQ:function($this){ 
			var reg, val;
	        reg = /^\d{4,}$/;
	      	val = $this.value;
	      	if (val === '') {
	        	return true;
	      	} else {
	        	return reg.test(val);
	      	}
		}
	}
	return new CheckValid();
});