define(["jquery"],function(){ 
	function ToolTip(tips){
		if(!(this instanceof ToolTip)){
			return new ToolTip(tips);
		}
		this.tips=tips;
		this.tNode=null;
		this.init();
	}
	ToolTip.prototype={
		constructor:ToolTip,
		init:function(){
			this.createTag();
			this.insertNode();
		},
		insertNode:function(){
			console.log(this.tips.pNode.find(".J_tip"))
			if(this.tips.pNode.find(this.tips.tag).is(".J_tip")){
				this.tips.pNode.find(".J_tip").remove();
			}
			this.tips.pNode.append(this.tNode);
		},
		createTag:function(){
			this.tNode=$(document.createElement(this.tips.tag));
			this.tNode.html(this.tips.tipMes);
			this.tNode.attr("class","J_tip");
		},
		rightFn:function(){
			this.tNode.addClass(this.tips.rClass)
		},
		errFn:function(){
			this.tNode.addClass(this.tips.eClass)
		}
	}
	return ToolTip;
})