const promise = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    // resolve({
    //   name:'Artems',
    //   age: 29
    // });
    reject('Error');
  }, 1500);  
});

promise.then((data)=>{
  console.log(data);
}).catch((error)=> {
  console.log(error);
});