// const car ={
//     brand:'BMW',
//     model: 'x5'
// }
// console.log(car)
// module.exports = car;
// const bar = () =>{
//     console.log('bar')
// }
// const baz = () =>{
//     console.log('baz')
// }
// const foo = () =>{
//     console.log('foo');
//     bar();
//     baz();
// }
// foo();

// const foo2 = () =>{
//     console.log('foo2')
//     setTimeout(bar,1000);
//     baz();
// }
// foo2();    //console.log('foo2')

// function getMessage(msg,callback){
//     setTimeout( () =>{
//         console.log(msg);
//         callback();
//     },1000);
// }
// function displayMessage(){
//     console.log('displayMessage');
// }

// getMessage('hello',displayMessage);


// let promise = new Promise(function(resolve,reject){

//     setTimeout(()=> resolve("Run Before"),1000)
// })

// promise.then(
//     result => {
//         console.log(result)
//         afterMsg()
//     },
//     error => console.log(error)
// )

// function afterMsg(){
//     console.log('Print After');
// }


// function Clown(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve('Hello')
//         },2000)
//     })
// }
// async  function msg(callback ){
//     const msg = await Clown();
//     console.log(msg);
//     callback();
// }

// msg(getResult)

// function getResult(){
//     console.log('After the Promise')
// }

// Http server

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// http.createServer((req,res) =>{

//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.write('welcome to http')
//     res.end();
// }).listen(port,hostname,() =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

// Http request


// const http = require('http')




// http.get('http://api.open-notify.org/astros.json',res =>{
//     let data = '';
//     res.on('data',chunk =>{
//         data+= chunk;
//     })
//     res.on('end', () =>{
//         const json = JSON.parse(data);
//         console.log(json);
//     })
// })

// Post request in node 
//  Native post request 

// const http = require('https');

// const data =JSON.stringify({
//     name:'Jahed',
//     age:25,
//     job:'Web developer'
// })
// const options = {
//     hostname:'reqres.in',
//     path:'/api/users',
//     method: 'POST',
//    headers: {
//     'Content-Type':'application/json'
//  }}

// const req = http.request(options,(res) =>{

// let data = '';
// console.log('Status Code ',res.statusCode)
// ;
// res.on('data',(chunk) =>{
//     data += chunk;
// })

// res.on('end',()=>{
//     console.log('Body:',JSON.parse(data))

// })
// })

// req.write(data);
// req.end();

// Start with axious


// const axios = require('axios');

// const data = JSON.stringify({
//     name:'Jahed',
//     age:25,
// })

// axios.post ('https://reqres.in/api/users',data).then(res =>{
//     console.log(`
//     Status Code ${res.status}
//     `)
//     console.log(res.data)
// })
// .catch(err =>{
//     console.log(err.message);
// })

// File system

const fs = require('fs');

fs.readFile('text.txt','utf-8',(err,data) =>{
    if(err) throw err;
    console.log(data);
})