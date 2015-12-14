function sum(){
	var slice=Array.prototype.slice;
	var args=slice.call(arguments,0)
	var i=args.length-1;
	var result=0;
	while(i>-1){
		result+=args[i--];
	}
	return result;
}
module.exports=sum;