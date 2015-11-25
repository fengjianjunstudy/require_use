define(["jquery","app/tooltip","app/validat"],function($,tooltip,validator){
	function Reg(data){
		if(!(this instanceof Reg)){
			return new Reg(data);
		}
		this.data=data;
		this.oTips={};
		this.init();
	}
	Reg.prototype={
		constructor:"Reg",
		init:function(){
			var self=this;
			if(!this.data){
				var allNode=$(".J_v");
				var len=allNode.length;
				for(var i=0;i<len;i++){
					var data={};
					data.dom=allNode[i];
					data.insertTag=$(allNode[i]).data("tag");
					data.eType=$(allNode[i]).data("etype");
					data.vTypes=$.trim($(allNode[i]).data("vtypes")).replace(/\s+/i," ").split(" ");
					data.errMes=$.trim($(allNode[i]).data("emes")).replace(/\s+/i," ").split(" ");
					data.errClass=$(allNode[i]).data("eclass")
					data.rightClass=$(allNode[i]).data("rclass");
					Reg(data)
				}
			}else{
				var oDom=$(this.data.dom) || $(".J_v");
				var eType=this.data.eType || "blur",
					vTypes=this.data.vTypes || [],
					errMes=this.data.errMes;
				this.oTips.tag=this.data.insertTag || "span";
				this.oTips.eClass=this.data.errClass || "v_err";
				this.oTips.rClass=this.data.rightClass || "v_right";
				oDom.on(eType,function(){
					self.oTips.selfNode=$(this);
					self.oTips.pNode=self.data.pNode || $(this).parent();
					var i=0,
						len=vTypes.length,
						mLen=errMes.length,
						val=$(this).val();
						if(len === 0){
							return ;
						}
						for(;i<len;i++){ 
							if(typeof validator[vTypes[i]] !=="function"){
								continue;
							}
							var flag=validator[vTypes[i]](val);
							if(flag &&((i+1)===len)){
								tooltip(self.oTips).rightFn();
							}else if(!flag){
								self.oTips.tipMes=mLen !== 1?self.data.errMes[i]:self.data.errMes[0]
								tooltip(self.oTips).errFn();
								break;
							}else{
								continue;
							}
						}
				})
			}
		}

	}
	return Reg;
})