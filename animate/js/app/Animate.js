define(["app/tween"],function(tween){
	function Animate(obj){
		if(!(this instanceof Animate)){
			return new Animate(obj);
		}
		this.dom=obj.dom;
		this.styles=obj.styles;
		this.allTime=obj.allTime;
		this.easing=tween[obj.ease] || tween["linear"];
		this.duration={};
		this.startPos={};
		this.endPos={}
		this.init();
		return this;
	}
	Animate.prototype={
		constructor:Animate,
		init:function(){
			var self=this;
			var timeId={};
			this.startTime=new Date();
			for(var property in this.styles){
				
				(function(property){
					self.duration[property]=self.allTime;
					self.startPos[property]=self.dom.getBoundingClientRect()[property];
					self.endPos[property]=self.styles[property];
					timeId[property]=setInterval(function(){
						if(self.step(property) === false){
							clearInterval(timeId[property])
						}
					},19)
				})(property)
				
			}


		},
		step:function(property){
			var now=new Date().getTime();
			if((now-this.startTime)>this.duration[property]){
				this.update(property,this.endPos);
				return false;
			}
			t=now-this.startTime.getTime();
			b=this.startPos[property];
			c=this.duration[property];
			d=this.endPos[property];
			var pos=this.easing(t,b,c,d)/20;
			console.log(pos)
			this.update(property,pos);
		},
		update:function(property,pos){
			this.dom.style[property]=pos+"px";
		}

	}
	return Animate;
})