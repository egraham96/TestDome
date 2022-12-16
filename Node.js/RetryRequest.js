async function retryRequest(promiseFunc, nrOfRetries) {
    // Write your code here
    let keepTrying=0
    do{
        try{
            var val=await promiseFunc()
            if(val){
                return val
            }
        } catch{
            keepTrying++
        }
        } while(keepTrying<nrOfRetries)
        reject;
    }
          
  let hasFailed = false;
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      if(!hasFailed) {
        hasFailed = true;
        reject("Exception!");
      } else {
        resolve("Fetched user!");
      }
    });
  }
  let promise = retryRequest(getUserInfo, 3);
  if(promise) {
    promise.then((result) => console.log(result))
    .catch((error) => console.log("Error!"));
  }
  module.exports.retryRequest = retryRequest;