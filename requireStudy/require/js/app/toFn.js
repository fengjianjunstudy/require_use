define(function(){
	function Person(name,age){
		if(!(this instanceof Person)){
			return new Person(name,age)
		}
		this.name=name;
		this.age=age;

	}
	Person.prototype={
		constructor:"Person",
		sayName:function(){
			console.log(this.name)
		},
		sayAge:function(){
			console.log(this.age)
		}
	}
	return Person;
})