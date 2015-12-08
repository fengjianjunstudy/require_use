define(function(){
	function Drag(ele){
		if(!(this instanceof Drag)){
			return new Drag(ele)
		}
		this.ele=ele;
		this.init();
	}
	Drag.prototype={
		constructor:"Drag",
		init:function(){
			var self=this;
			this.ele.onmousedown=this.downHandle.bind(self);
		},
		downHandle:function(e){
			var self=this;
			var scrollPos={
				x:document.documentElement.scrollTop || document.body.scrollTop,
				y:document.documentElement.scrollLeft || document.body.scrollLeft
			}
			var e=e || window.event;

			var startX=e.clientX+scrollPos.x;
			var startY=e.clientY+scrollPos.y;
			var eleX=this.ele.offsetLeft;
			var eleY=this.ele.offsetTop;
			var disX=startX-eleX;
			var disY=startY-eleY;
			if(this.ele.setCapture){
				this.ele.setCapture();
			}
			e.stopPropagation? e.stopPropagation() :e.cancelBubble=true;
			e.preventDefault?e.preventDefault() :e.returnValue=true;
			this.ele.onmousemove=function(e){
				var e=e || window.event;
				var scrollPos={
					x:document.documentElement.scrollTop || document.body.scrollTop,
					y:document.documentElement.scrollLeft || document.body.scrollLeft
				}
				self.ele.style.top=(e.clientY+scrollPos.y-disY)+"px";
				self.ele.style.left=(e.clientX+scrollPos.x-disX)+"px";
				e.stopPropagation? e.stopPropagation() :e.cancelBubble=true;
			}
			this.ele.onmouseup=function(){
				self.ele.onmousemove=null;
				self.ele.onmouseup=null;
				if(self.ele.releaseCapture){
					self.ele.releaseCapture();
				}
				e.stopPropagation? e.stopPropagation() :e.cancelBubble=true;
			}
		}
	}

	return Drag;
})