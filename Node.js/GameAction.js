function wrapGameAction(emitter, actionName, callback) {
    // Write your code here
    
    emitter.on(actionName, JSONstring => {

        function tryParseJSONObject (str){
            try {
                var o = JSON.parse(str);
        
                // Handle non-exception-throwing cases:
                // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
                // but... JSON.parse(null) returns null, and typeof null === "object", 
                // so we must check for that, too. Thankfully, null is falsey, so this suffices:
                if (o && typeof o === "object") {
                    return o;
                }
            }
            catch (e) { }
        
            return false;
        };
        let parsed=tryParseJSONObject(JSONstring)
        if(parsed){
            callback(parsed)
        }else{
            callback(undefined)
        }
    });

  }
  
  
const events = require('events');
let emitter = new events.EventEmitter();
wrapGameAction(emitter, "player_1_select", console.log);
emitter.emit("player_1_select", "{ \"row\": 1, \"column\": 1 }");
  
module.exports.wrapGameAction = wrapGameAction;