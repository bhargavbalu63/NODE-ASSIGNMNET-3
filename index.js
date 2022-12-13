
const fs = require("fs")

const http = require("http")
fs.writeFile("index.html","<h1> Hello World</h1> <br> <p> This is Bhargav... </p>",(err)=>
{
       console.log(err);
       
})
const server = http.createServer((req, res)=>
{
 
        fs.readFile('index.html', (error, data)=> {
                
               
                    res.write(data);
             
                res.end();
        })
   
})
server.listen(5000, ()=>
console.log("post 5000 is up"))