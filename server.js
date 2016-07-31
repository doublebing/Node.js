var http=require('http');
var url=require('url');

function start(route){
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log('Request for'+pathname+' received.');
		
        route(pathname);

        //发送HTTP头部
		response.writeHead(200,{'Content-Type':'text/plain'});
		//发送响应数据
		response.write('Hello World');
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	//终端打印信息
	console.log('server has started.');
}

exports.start=start;