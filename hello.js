/*
console.log("hello world");
var studentName = "jahangir";
console.log(studentName);
console.log(typeof studentName);
var studentAge = 20;
console.log(studentAge)
var scienceStudent = true;
console.log (scienceStudent);
console.log (typeof scienceStudent);
var column = "abcdefghijklmnopqrstuvwxyz";
console.log (column.toUpperCase());
var paragraph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(paragraph.toLowerCase());
var friendsName = "rahim karim jodu modhu"
console.log (friendsName.split ("rahim"));
console.log (friendsName.indexOf ("karim"));
var num1 = 50;
var num2 = 80;

var mote = num1 + num2;
console.log (mote);


var num1 = "20.5"
var num2 = 50
// string to float number type e convert
num1 = parseFloat (num1);
var total = num1 + num2;
console.log (total);


var num1 = "20"
var num2 = 50
// string to integer number type e convert
num1 = parseInt (num1);
var total = num1 + num2;
console.log (total);


var num1 = 800;
var num2 = 60;
// number to string convert
num1 = "" + num1;
var total = num1 + num2;
console.log (total);

var obtainVote = -21;
var sum = Math.abs(obtainVote);
console.log (sum);

var obtainVote = 21.50;
var sum = Math.round (obtainVote);
console.log (sum);

var obtainVote = 21.01;
var sum = Math.ceil (obtainVote);
console.log (sum);

var obtainVote = 21.90;
var sum = Math.floor (obtainVote);
console.log (sum);


var winner = Math.random () *10;
console.log (winner);

var a= 10;
var b = 20;
if(a<b){
console.log ("correct");
}
else {
console.log ("incorrect");
}

var a = 15;
var b = 15;
if(a<b){
console.log ("b boro");
}

else if (a>b){
console.log ("a boro");
}

else {
console.log ("Both are same");
}

var number1 = 4;

switch (number1){
        case 20:
                console.log ("You are awesome");
                break;
        case 15:
                console.log ("You are the perfect one");
                break;
        case 10:
                console.log ("You are the right one");
                break;
        case 5:
                console.log ("You can do our job");
                break;
        default:
                console.log ("Can you do the task, which we need?");
                break;
        }

 var myDate = new Date();
        console.log (myDate.toDateString(), myDate.toTimeString());
        console.log (myDate.toLocaleTimeString());
        console.log(myDate.getMonth()+1);
 var num = 50;
 var MyCondition = (num < 50) ? "You are outstanding!" : "You have to improve!";        
        console.log (MyCondition);
        */
for (var i = 0; i < 10; i ++) {
        if (i == 5){
        console.log();
        break;
        }
        console.log(i);
} 

for (var i = 0; i < 10; i ++) {
        if (i == 5){
        console.log();
        continue;
        }
        console.log(i);
} 