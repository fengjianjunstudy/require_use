var module={
	_count:1,
	m1:function(){
		console.log(--this._count);
	},
	m2:function(){
		console.log(++this._count)
	}
}
module._count=10;
module.m1();
module.m2();