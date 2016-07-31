/*
//对象间原型继承
var util = require('util'); 
function Base() { 
	this.name = 'base'; 
	this.base = 1991; 
	this.sayHello = function() { 
	console.log('Hello ' + this.name); 
	}; 
} 
Base.prototype.showName = function() { 
	console.log(this.name);
}; 
function Sub() { 
	this.name = 'sub'; 
} 
//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
//同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。
util.inherits(Sub,Base);
var objBase=new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub=new Sub();
objSub.showName();
//objSub.sayHello();出错
console.log(objSub);
*/
/*
//util.inspect将任意对象转换为字符串
var util=require('util');
function Person(){
	this.name='byvoid';
	this.toString=function(){
		return this.name;
	}
}
var obj=new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
*/
//util.isArray(object) 如果给定的参数 "object" 是一个数组返回true，否则返回false。
var util = require('util');

console.log(util.isArray([]));// true
console.log(util.isArray(new Array));// true
console.log(util.isArray({}));// false

util.isRegExp(/some regexp/);// true
util.isRegExp(new RegExp('another regexp'));// true
util.isRegExp({});// false

util.isDate(new Date());// true
util.isDate(Date());// false (without 'new' returns a String)
util.isDate({});// false

util.isError(new Error());// true
util.isError(new TypeError());// true
util.isError({ name: 'Error', message: 'an error occurred' });// false