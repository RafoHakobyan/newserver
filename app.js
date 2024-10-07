const http = require("http")
const url = require("url")
const {parse} = require("querystring")

const server = http.createServer((request,response) =>{
    console.log("server work")
    if (request.method == "GET") {
        
    
    console.log(request.method)
    let urlRequest = url.parse(request.url,true)
    // console.log(urlRequest);
    console.log(urlRequest.query.test);
    if (urlRequest.query.test % 2 == 0 ) {
        response.end("even")
    }
    response.end("odd")
}
    
else{
// POST ====>>>
let body = ""
request.on("data", chunk =>{
    body += chunk.toString()
})
request.on("end",()=>{
    console.log(body)
    let params = parse(body)
    console.log(params);
    console.log(params.name);
    
    
    response.end("ok");
    
})
}  



// response.end("chao")
   
    

}).listen(3000)
