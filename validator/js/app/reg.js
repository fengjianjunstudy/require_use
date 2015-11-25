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
					data.tag=$(allNode[i]).data("tag");
					data.etype=$(allNode[i]).data("etype");
					data.vtypes=$.trim($(allNode[i]).data("vtypes")).replace(/\s+/i," ").split(" ");
					data.emes=$.trim($(allNode[i]).data("emes")).replace(/\s+/i," ").split(" ");
					data.eclass=$(allNode[i]).data("eclass")
					data.rclass=$(allNode[i]).data("rclass");
					data.pNode=$(allNode[i]).data("pNode");
					Reg(data)
				}
			}else{
				var odom=$(this.data.dom) || $(".J_v");
				var etype=this.data.etype || "blur",
					vtypes=this.data.vtypes || [],
					emes=this.data.emes;
				this.oTips.tag=this.data.tag || "span";
				this.oTips.eclass=this.data.eclass || "v_err";
				this.oTips.rclass=this.data.rclass || "v_right";
				console.log(etype)
				odom.on(etype,function(){
					self.oTips.selfNode=$(this);
					self.oTips.pNode=self.data.pNode || $(this).parent();
					var i=0,
						len=vtypes.length,
						mLen=emes.length,
						val=$(this).val();
						if(len === 0){
							return ;
						}
						for(;i<len;i++){ 
							if(typeof validator[vtypes[i]] !=="function"){
								continue;
							}
							var flag=validator[vtypes[i]](val);
							if(flag &&((i+1)===len)){
								tooltip(self.oTips).rightFn();
							}else if(!flag){
								self.oTips.tipMes=mLen !== 1?self.data.emes[i]:self.data.emes[0]
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