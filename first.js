const http = require("http");
http.createServer(function(request,response){

    response.end("Hello NodeJS! Headers: " + JSON.stringify(request.headers));

}).listen(80, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 80");
});