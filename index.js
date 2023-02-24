// pratice of creating a server
// const http=require("http");
// const server=http.createServer((request,response,next)=>
// {
//     console.log(request.url)
//     response.end("The server is created")
// })
// without listening the server is useless

// server.listen(4000,"localhost",()=>{
//     console.log("Server is working on: http://localhost:4000")
// })


// express js is a framwork of nodejs
// npm init se apka package.json ki file banti ha aur sath hi node modules ka folder bhi banta ha
// uskay baad npm i express se hum express install krtay han

// how to import express

// const express=require("express");
// now we will create an app using express
// const port=2000;

// First method
// const host="localhost";
// const app=express();
// app.listen(port,()=>{
//     console.log(`Server is working at port number:${port}`)
// })

// app.get("/",(req,res)=>
// {
//     res.send("<h1>HOME PAGE</h1>")
// })

// app.get("/about",(req,res)=>
// {
//     res.send("<h1>ABOUT PAGE</h1>")
// })


// page of login is not rendering because path is not specified
// app.get("/login",(req,res)=>
// {
//     res.sendFile("./index.html")
// })

// const path=require("path")
// console.log(path.dirname("C:\Users\Abdul Wahid\Desktop\web development work\Express js"))


// app.get("/",(req,res)=>
// {
//     res.sendFile(path.join(__dirname + "/index.html"))
// })

// app.post("/",(req,res)=>
// {
//     console.log("name");
// })

// app.post("/",(req,res)=>
// {
    // req.body 
    // the above line represents the data that will be taken from the body of html page
    // req.body.name 
    // the above line represents the data that will be taken from the part of form that is having id "name" of html page

    // const UserName=req.body.name 
    // data is stored in a variable    
// })

// Second Method not used more because web have to use agin and agian express().

// express().listen(port,()=>
// {
//     console.log(`Server is working at the port number:${port}`)
// })

// express().get("/",(request,response)=>
// {
//     response.send("<h1>HOME PAGE</h1>");
// })

// Benefit of Express: now like http we donot have to use the if else condtion again and again

// C               R                U              D
// Create          Read             update         Delete

// "CRUD" IS A TERM USED FOR DATA BASE
// But in the world of API it is known as GET, POST, PUT, DELETE
// GET is used to read the data of API
// PUT is used to update data of API
// DELETE is used to delete data of API
// POST is used to create data of API
// When we enter the data for a login page and press on the submit button then the data is sent to another API and the data then "created" is with the help of post method

// use of api
// we will get the data from get method
// after that we will hide the data

// const path=require("path");
// const a="about.html";
// const newfile=path.join(__filename+a);
// console.log(newfile);

// const express=require("express");

// const bodyParser=require("body-parser")

// const path= require("path");

// const app=express();
// const port=2000;

// // middleware is written inside use
// app.use(bodyParser.urlencoded({extended:false}))

// app.listen(port,()=>{
//     console.log(`server is working at: ${port}`);
// })

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname+"/index.html"));
// })

// app.post("/api/v1/login",(req,res)=>
// {
//     res.send(`<h1>User Name is: ${req.body.name}</h1>
//     <h1>User Email: ${req.body.email}</h1>
//     <h1>User Password: ${req.body.password}</h1>`)
    
//     console.log(req.body)
// })

// What is API?
// REST (Representaion State transfer) is an API that defines the set of a function that programmers can use to send request and recieve responses using http protocol methods such as get and post.

// get and post methods are apis
// we don't pas the file to api 
// we pass the json data to api

// it is not possible for us to make the form again and again to receive data. Therefore, we will use postman to solve this problem

const express=require("express");
const path =require("path")
const app=express();
const bodyparser=require("body-parser");
const router = require("./userroutes");
// in order to make the post method work we have to import router here

app.use(router)

// bodyparser is for get 
app.use(bodyparser.urlencoded({extended:false}))

// for accessing data from post we use
app.use(express.json())
app.get("/login",(req,res)=>
{
    res.sendFile(path.join(__dirname+"/index.html"))
    // res.json({
    //     name:"Usman Ghani",
    //     Email:"usmanghani@gmail.com",
    //     password:"pada",
    // })

})

// app.post("/",(req,res)=>
// {
//     const username=req.body.name;
//     const userEmail=req.body.email;
//     const userpassword=req.body.password;

//     res.json(
//         {
//             success:true,
//             name:username,
//             email:userEmail,
//             password:userpassword,
//         }
//     )


// })

const port=2000
app.listen(port,()=>
{
    console.log(`Server is working at port no:${port}`);
})



