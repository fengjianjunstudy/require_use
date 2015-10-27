define(["../store/index"],function(store){ 
	var obj={name:"xiaohua"};
	for(var key in store){ 
		if(store.hasOwnProperty(key) && !obj[key]){
			obj[key]=store[key];
		}
	}
	return obj;
})