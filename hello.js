/*exports.world=function(){
	console.log('Hello World');
}*/
function hello(){
	var name;
	this.setName=function(thyName){
		name=thyName;
	};
	this.sayHello=function(){
		console.log('hello'+name);
	};
};
module.exports=hello;
