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

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req,res) =>{

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('welcome to http')
    res.end();
}).listen(port,hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})





