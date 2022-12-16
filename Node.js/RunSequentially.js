async function runSequentially(functions) {
    //Write your code here
    var result=[]
    for(const fn of functions){
        var val=await fn()
        if(val){
            result.push(val)
        }
    }
    return result;
  }
  
  let counter = 1;
  function incrementCounterAsync() {
    return new Promise((resolve, reject) => {
        counter += 1;
        resolve(counter);
    });
  }
  let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
  if(promise) {
    promise.then(result => console.log(result))
    .catch(error => console.log("Error: " + error));
  }
  module.exports.runSequentially = runSequentially;