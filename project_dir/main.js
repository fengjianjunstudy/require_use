require.config({ 
	"packages":["cart"]
});
require(["cart"],function(cart,store){
	console.log(cart)
	console.log(store) 
})
