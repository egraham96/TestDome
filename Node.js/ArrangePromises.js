function arrangePromises(action, onSuccess, onSecondSuccess, onError, cleanup) {
    // Write your code here
            const promise2 = action.then(onSuccess);
            const promise3=promise2.then(onSecondSuccess)
            promise3.then(cleanup)
            .catch(onError);
        

}
arrangePromises(Promise.resolve("First promise!"), 
                (result) => { console.log(result);
                              return Promise.resolve("Second promise!");
                            },
                (result) => console.log(result),
                (error) => console.log("Error!"),
                () => console.log("Cleanup!"));

module.exports.arrangePromises = arrangePromises;
  
