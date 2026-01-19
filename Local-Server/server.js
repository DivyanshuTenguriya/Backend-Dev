// // path module




// // abosulte path
// const abosultePath=Path2D.resolve("./FS/log.txt")

// console.log(abosultePath)
// console.log(__dirname)
// console.log(Path2D.basename('./FS/log.txt'))
// console.log()

// const joinPath=Path2D.join(__dirname,"FS","log.txt");
// console.log(joinPath)

// const pathParse=path.parse(joinPath)
// console.log(pathParse)

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     console.log(req.method)
//     res.writeHead(200,{"content-type": "text/html"})
//     res.write("<h1> welcome </h1>")
//     res.end()
// })

// server.listen(3000,()=>{
//     console.log("server is running on port",3000)
// })

//--------------------------------------------(12/01/2025)--------------------------------------------\\
// const http = require("http");
// const server=http.createServer((req,res)=>{
//     console.log("url "+req.url)
//     console.log("Http method "+req.method)

//     res.writeHead(200,{
//         "content-type":"text/html",
//         "userinfo":"this is a user"
//     })
//     res.end("hello")
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

// const server = http.createServer((req,res)=>{

//   console.log("url "+ req.url)
//   console.log("Http method " + req.method)

//   res.writeHead(200,{
//     "content-type":"text/html",
//     "userinfo":"this is my user"
//   })

//   res.end("hello")

// })

// server.listen(3000,()=>{
//   console.log("server is running ")
// })

// send json data
// let user = {
//   username: "deepak",
//   email: "qwerty@gmail.com",
// };

// const server = http.createServer((req,res)=>{

//     if (re)
//   res.writeHead(200,{
//     "content-type":"application/json"
//   })

//   res.end(JSON.stringify({
//     sucess:"true",
//     user
//   }));

// })

// const server=http.createServer((req,res)=>{

//     if(req.url==='/'){
//         res.writeHead(200,{
//             "content-type":"text.html",
//         });

//         res.end("<h1>Home Page</h1>")
//     }
//     else if(req.url==='/about'){
//         res.writeHead(200,{
//             "content-type":"text.html",
//         });
//         res.end("<h1>About Page</h1>")
//     }
//     else if(req.url==='/contact'){
//         res.writeHead(200,{
//             "content-type":"text.html",
//         });
//         res.end("<h1>Contact Page</h1>")
//     }
//     else{
//         res.writeHead(200,{
//             "content-type":"text.html",
//         });
//         res.end("<h1>Page Not Found</h1>")
//     }
//     // res.writeHead(200,{
//     //     "content-type":"text.html"
//     // })
//     // res.end("<h1>Home</h1>")
// })
//------------------------------------------------------------------------------------------------\\
// const fs = require("fs");
// const server = http.createServer((req, res)=>{
//   fs.readFile("./Public/index.html", "utf-8", (err, data) => {
//     if (err) {
//       res.end("server error");
//     }
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });
//     res.end(data);
//   });
// });
// server.listen(3000, () => {
//   console.log("server is running");
// });

