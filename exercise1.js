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