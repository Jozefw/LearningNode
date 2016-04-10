var http = require('http');
var connect = require('connect');

var myApp = connect();

function profile(request, response){
    console.log("your in profile");
};

function about(request, response){
    console.log("your in about");
};

function doFirst(request, response, next){
    console.log('your inside doFirst ');
    next();
};

function doSecond(request, response, next){
    console.log('your inside doSecond ');
    next();
};

myApp.use('/profile', profile);
myApp.use('/about', about);

myApp.use(doFirst);
myApp.use(doSecond);


http.createServer(myApp).listen(3002);
console.log("Your server is running on port 3002...")