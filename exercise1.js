//intialising the variables
var false_reading = 56287;
var true_reading = 0
var power = 0
while (false_reading > 0) {
    if ((false_reading % 10) > 4 )  
    {
        true_reading += ((false_reading %10) - 1) * Math.pow(10,  power)    
    } else {
        true_reading += (false_reading%10) * Math.pow(10, power)    
    }
    false_reading = Math.trunc(false_reading / 10)  
     power += 1;
}
console.log(true_reading)

/* here number is devided into digits and then check if the number is greater than 4 or not, if greater than 4 then subtract 1 from it and then  multiply it with its place value then added to ture reading */