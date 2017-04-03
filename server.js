var http = require("http"),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

// Note : Instead to statisfy each url, one can use pattern matching to load the files.

http.createServer(function (request, response) {

  var pathname = url.parse(request.url).pathname;
  var extname = path.extname(pathname);

  if(pathname === '/'){
    fs.readFile('index.html',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/templates/main.htm'){
    fs.readFile('templates/main.htm',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/templates/profile.htm'){
    fs.readFile('templates/profile.htm',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/templates/resource.htm'){
    fs.readFile('templates/resource.htm',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/css/vendor/bootstrap.min.css'){
    fs.readFile('css/vendor/bootstrap.min.css',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/css'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/css/vendor/bootstrap-theme.min.css'){
    fs.readFile('css/vendor/bootstrap-theme.min.css',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/css'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/css/main.css'){
    fs.readFile('css/main.css',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/css'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'){
    fs.readFile('js/vendor/modernizr-2.8.3-respond-1.4.2.min.js',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/javascript'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/js/vendor/ui-bootstrap-tpls-2.4.0.min.js'){
    fs.readFile('js/vendor/ui-bootstrap-tpls-2.4.0.min.js',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/javascript'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/js/main.js'){
    fs.readFile('js/main.js',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/javascript'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/js/project.js'){
    fs.readFile('js/project.js',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/javascript'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/js/controller/controller.js'){
    fs.readFile('js/controller/controller.js',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/javascript'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/js/routing/route.js'){
    fs.readFile('js/routing/route.js',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'text/javascript'});
      response.write(data);
      response.end();
    });
  }
  if(pathname === '/favicon.ico'){
    fs.readFile('favicon.ico',"utf-8", function(error,data){
      response.writeHead(200, {'Content-Type':'image/*'});
      response.write(data);
      response.end();
    });
  }   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');