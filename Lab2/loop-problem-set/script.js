start = -10
end = 19

console.log("Print all numbers between -10 and 19")
while (start <= end) {
    console.log(start++);
}

console.log("Print all even numbers between 10 and 40")
for (let index = 10; index <= 40; index++) {
    if (index % 2 == 0) {    
        console.log(index);   
    } 
}

console.log("Print all odd numbers between 300 and 333")
for (let index = 300; index <= 333; index++) {
    if (index % 2 != 0) {    
        console.log(index);   
    } 
}

console.log("Print all numbers divisible by 3 AND 5 between 5 and 50")
for (let index = 5; index <= 50; index++) {
    if (index % 5 == 0 && index % 3 == 0) {    
        console.log(index);   
    } 
}