"use strict";

// var aa=function(x){
//        var p=new Promise((resolve,reject)=>{
//            if(x>5){
//                x++;
//                resolve(x);
//            }else{
//                x--;
//                reject(x);
//            }
//        })
//        return p;
//    };
//    aa(4).then((data)=>{
//        console.log("ok"+data);
//    },(data)=>{
//        console.log("fail"+data);
//    }).then((data)=>{
//        console.log('ok1'+data)
//    },(data)=>{
//        console.log('fail1'+data)
//    })
//     var aa=function(m){
//         var p=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve(m)
//             })
//         })
//     };
// aa('nz').then(()=>{
//     console.log('这是第一个then');
//     console.log(data);
//     return data+'is';
// }).then(()=>{
//     console.log('这是第二个then');
//     console.log(data);
//     return data+'luck';
// }).then(()=>{
//     console.log('这是san个then');
//     console.log(data);
//     return new Promise((resolve,reject)=>{
//         reject('reject拒绝了')
//     })
// }).then(()=>{
//     console.log('resolve')
// },(data)=>{
//     console.log(data);
// })
//
//     var p1=new Promise((resolve,reject)=>{
//         resolve(10);
//     });
//     var p2=new Promise((resolve,reject)=>{
//         relove(20);
//     });
//     var p3=new Promise((resolve,reject)=>{
//         resolve(30);
//     });
//     Promise.all([p1,p2,p3]).then((data)=>{
//         console.log(data);
//     },(data)=>{
//         console.log()
//     });
// var reqPic=new Promise((resolve,reject)=>{
//         var img=new Image();
//         img.src="aaa.jpg";
//         img.onload=()=>{
//             resolve(img);
//         }
//     });
//     var picTimeOut=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("图片请求超时")
//         },5000)
//     });
//     Promise.race([reqPic,picTimeOut]).then((res)=>{
//         console.log(res);
//     }).catch((res)=>{
//         console.log(res);
//     })
//取最大值 由于max()里面参数不能为数组，所以借助apply(funtion,args)方法调用Math.max()，
// function为要调用的方法，args是数组对象，当function为null时，
// 默认为上文,即相当于apply(Math.max,arr)
// var arr=[21,17,99,28];
// var max = Math.max.apply(null,arr);
// console.log(max)
// var max1 = Math.max.call(null,7,2,0,-3,5)
// console.log(max1)
// var array = [1, 2, 3];
// console.log(Math.max(...array));
// const p1=new Promise((resolve,reject)=>{
//     resolve('hello');
// });
// const p2=new Promise((resolve,reject)=>{
//     reject('报错了')
// }).then(result=>result).catch(e=>e);
// Promise.all([p1,p2]).then(result=>console.log(result)).catch(e=>console.log(e));
// function runAsync1(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('异步任务1执行完成');
//             reject('随便什么数据1');
//         }, 1000);
//     });
//     return p;
// }
// function runAsync2(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             reject('随便什么数据2');
//             console.log('异步任务2执行完成');
//
//         }, 500);
//     });
//     return p;
// }
// function runAsync3(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('异步任务3执行完成');
//             resolve('随便什么数据3');
//         }, 2000);
//     });
//     return p;
// }

// Promise.race([runAsync1(), runAsync2(), runAsync3()]).then(function(data){console.log(data);
// });//异步任务1执行完成 随便什么数据1 异步任务2执行完成 异步任务3 执行完成
// //    在then里面的回调开始执行时，runAsync2()和runAsync3()并没有停止，仍旧再执行。于是再过1秒后，输出了他们结束的标志
var aPromise = new Promise(function (resolve) {
    resolve(100);
    return aPromise;
});

aPromise.then(function (value) {
    console.log(value);
    return value * 2;
}).then(function (value) {
    console.log(value);
    return value * 2;
}).then(function (value) {
    console.log(value);
});
// aPromise.then(function (value) {
//
// });
aPromise.then(function (value) {
    console.log("1: " + value); // => 10
}).then(function (value) {
    console.log(value);
});

//# sourceMappingURL=lianxi-compiled.js.map