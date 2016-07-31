var http=require('http');
var url=require('url');
var querystring=require('querystring');
var util=require('util');

//获得Get请求内容
/*http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end(util.inspect(url.parse(request.url,false)));

}).listen(3000);*/

//获得Post请求内容
http.createServer(function(request,response){
	var post='';//暂存请求体的信息
	request.on('data',function(chunk){//通过request的data事件监听函数，每当接受到请求体的数据，就累加到post变量
		post+=chunk;
	});

	request.on('end',function(){
		post=querystring.parse(post);//将post解析为真正的POST请求格式，然后向客户端返回
		response.end(util.inspect(post));
	})
}).listen(3000);

