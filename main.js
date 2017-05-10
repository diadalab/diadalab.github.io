

var number = "7";
var numberList =["3","7","8","9","5","7","2","7"];
var theseNunmbers = numberList.length;  //only for result
var repeatNumber = [];
var result = 0;

function countRepeatNumber (number, numberList){

      for (var i = 0; i < numberList.length; i++) {

        if (numberList[i] === number) {

          repeatNumber = repeatNumber + numberList[i]; // array [0]
        }
        var totalRepeatNumber = repeatNumber.length -1;
      }

    return repeatNumber;
}

countRepeatNumber(number,numberList);

console.log("The list has "+theseNunmbers+" numbers and the repeated number is:"+number+".Repeats "+ repeatNumber.length + " veces.");

window.alert("The list has "+theseNunmbers+" numbers and the repeated number is "+number+". Repeats "+ repeatNumber.length + " veces.")
