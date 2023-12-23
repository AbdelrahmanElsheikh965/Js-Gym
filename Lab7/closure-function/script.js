alert(`In the console, try to assign parent() to 
        2 different variables 
        var t1 = parent();
        var t2 = parent();
        & then, call these variables separately i.e. t1() t2()`)

// This is a closure function returning internally another function as a child
function parent() {
    let coins = 5;
    return function() { 
        // This function takes a snapshot of coins value (5) everytime called
        return coins -= 1;
    }
}

/**
 * The approach is to assign calling of parent() to a variable=> var t1 = parent()
 * And, then, you can that variable t1() // prints 4 => simulating class and object 
 * Every call of parent() makes a new version of coins.
 * 
 * Reason:
 * Even though the parent() function execution ends and 
 * Coins would normally be out of scope and destroyed, 
 * The inner function retains access to coins because it "closes over" that variable.
 */