 var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
/*
const filteredarray = array.filter(x => x.length <= 3);
console.log(filteredarray);

const mapToUpperCase = array.map(x => x.toUpperCase());
console.log(mapToUpperCase)

function myMap(arr, callback){
    let temp = [];
    for(let i=0; i<arr.length; i++){
        value = callback(arr[i], [i], arr);
        temp.push(value);
    }
    return temp;
}
function callbackMap(name){
    return name.length >= 3;
}
var myMapWorks = myMap(array, callbackMap);
console.log("myMapWorks " + myMapWorks);
*/
//opgave 4
//a
//HVORFOR VIRKER det her ikke? :D)
//const myMapArr = array.map(person => '<li>${person}</li>'); 
//onsole.log("mymap"+ myMapArr)
/*const myMappedArray = array.map(person => `<li>${person}</li>`);
console.log("mymap2"+ myMappedArray)
const listOfNames = `<ul>${myMappedArray}</ul>`;
*/
//b
/*
var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
const stringOfNames = names.map(person => `<tr><td>${person.name}</td><td>${person.phone}</td></tr>`).join("");
*/
//c,d lavet i indexStefanDay1

//REDUCE
//a
var all= ["Lars", "Peter", "Jan", "Bo"];
const allJoined = all.join(",");
console.log("all " + allJoined)
//b
var numbers = [2, 3, 67, 33];

function allSum(numbers){
let sumResult = 0
for(let i = 0; i< numbers.length; i++){
  sumResult += numbers[i]; 
}
return sumResult
}

const sum = allSum(numbers);
console.log("sumResult " + sum);
//c
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ];
   
function average(members){
    let sumAverage = 0;
    for(let i = 0; i < members.length; i++){
        sumAverage = members[i].age;
    }
    return sumAverage;
}
const sumAvg = average(members);
console.log("average " + sumAvg);
//d
let votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
function election(votes){
    let candidates = {Clinton: 0, Trump: 0, None: 0 };
    for(let i = 0; i < votes.length; i++){
        if(votes[i] === "Clinton") candidates["Clinton"] += 1;
        if(votes[i] === "Trump") candidates["Trump"] += 1;
        if(votes[i] === "None") candidates["None"] += 1;
    }
    return candidates;
}
const electionResult = election(votes);
console.log("electionResult "+ electionResult);

