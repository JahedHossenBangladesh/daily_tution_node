// const car ={
//     brand:'BMW',
//     model: 'x5'
// }
// console.log(car)
// module.exports = car;
const bar = () =>{
    console.log('bar')
}
const baz = () =>{
    console.log('baz')
}
const foo = () =>{
    console.log('foo');
    bar();
    baz();
}
foo();

const foo2 = () =>{
    console.log('foo2')
    setTimeout(bar,1000);
    baz();
}
foo2();    //console.log('foo2')
