define(function(){
	function SubPub(){
		if(!(this instanceof SubPub)){
			return new SubPub();
		}
		this.topicFn={};
	}
	SubPub.prototype={
		constructor:SubPub,
		subscribe:function(topic,fn){
			if(!this.topicFn[topic]){
				this.topicFn[topic]=[];
			}
			this.topicFn[topic].push(fn);
		},
		publish:function(topic,args){
			if(!this.topicFn[topic]){
				return false;
			}
			var fns=this.topicFn[topic],
				i=0,
				len=fns.length;
			for(;i<len;){
				fns[i++].apply(null,args)
			}
		},
		unsubscribe:function(topic,fn){
			if(!this.topicFn[topic]){
				return false;
			}
			var fns=this.topicFn[topic],
				i=0,
				len=fns.length;
			for(;i<len;i++){
				if(fns[i] === fn){
					this.topicFn[topic].splice(i,1)
				}
			}
		}
	}
	return SubPub;
});