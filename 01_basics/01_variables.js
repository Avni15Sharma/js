const accountId = 144553 //we'll use this to declare constants
let accountEmail = "oopsie@google.com" //we'll use this to declare variables
var accountPassword = "12345" //problematic, so not used anymore
accountCity = "New Delhi" //it works but not a good practice
let accountState; //bcoz this is not initialized, it will show undefined

// accountId = 2 // not allowed bcoz its constant


accountEmail = "asoopsie@as.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//table to print multiple values