requirejs.config({
	baseUrl:"js/bin",
	paths:{
		app:"../app"
	}
});
requirejs(["app/subPub"],function(SubPub){
	var subPub=new SubPub();
	var header=(function(){
			var header= {
					topic:"t1",
					fn:function(data){
						var oBody=document.getElementsByTagName("body")[0];
						var oDiv=document.createElement("div");
						oDiv.innerHTML=data["user_name"]+" "+"登陆成功！"
						oBody.appendChild(oDiv)
					}
				}
			subPub.subscribe(header.topic,header.fn);
			return header;
		}());
	var nav=(function(){
			var nav={
					topic:"t1",
					fn:function(data){
						var oBody=document.getElementsByTagName("body")[0];
						var oDiv=document.createElement("div");
						oDiv.innerHTML=data["user_name"]+"的年龄："+data["age"];
						oBody.appendChild(oDiv)
					}
				}
				subPub.subscribe(nav.topic,nav.fn)
				return nav;
		}());

	subPub.publish("t1",[{user_name:"xiaoming",age:18}])
	subPub.unsubscribe("t1",header.fn);
	subPub.publish("t1",[{user_name:"xiaoming",age:18}])
});